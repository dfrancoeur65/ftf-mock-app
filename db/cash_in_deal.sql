
SELECT

deals.id::text as "Deal ID",

deals.street as "Name",

level_two.cash_in_deal,

level_two.dsl as debt_servicing_type,

loans.funding_request_amount,

level_three.amount_invested,

level_two.loan_accruing,

level_two.loan_accruing - level_three.amount_invested as "Left to Fund",

case

  when level_two.cash_in_deal > level_three.amount_invested

  then  level_two.cash_in_deal - level_three.amount_invested

  else 0

end as Cash_left_in_Deal,

level_two.cash_on_cash_apr,

loans.annual_percentage_rate as "Stated APR",

to_char(loans.origination_date,'MM-DD-YYYY') as originated_on

from loans

left join deals on loans.deal_id = deals.id

left join(

    Select

    deals.id as deal_id,

    deals.street as "Name",

    ac.net_proceeds_disbursed

    + coalesce(s.construction_draw_total, 0)

    + loans.funding_request_amount * loans.origination_fee_percentage as cash_in_deal,

    case

      when loans.debt_servicing_type = 1

      then 'Tranche'

      when loans.debt_servicing_type = 0

      then 'At Close'

    end as dsl,

    case

      when loans.debt_servicing_type = 1

      then loans.funding_request_amount - (loans.funding_request_amount - ac.purchase_amount - ac.prepaid_interest) + coalesce(s.construction_draw_total,0)

      when loans.debt_servicing_type = 0

      then loans.funding_request_amount

    end as loan_accruing,

    case
      when loans.debt_servicing_type = 0

      then ac.normal_interest/(ac.net_proceeds_disbursed+coalesce(s.construction_draw_total,0))*12

      else loans.annual_percentage_rate

    end as cash_on_cash_apr,

    loans.annual_percentage_rate as "Stated APR",

    to_char(loans.origination_date,'MM-DD-YYYY') as originated_on

    From loans JOIN deals ON loans.deal_id = deals.id

    left join

        (Select

        construction_draws.loan_id as loan_id,

        sum(construction_draws.amount) as construction_draw_total

        from construction_draws

        group by construction_draws.loan_id

        ) as s on loans.id = s.loan_id


    left join

    (Select

    loans.id as id,

    least(loans.purchase_price * loans.first_distribution_percentage,  loans.funding_request_amount - loans.funding_request_amount * loans.annual_percentage_rate / 12 * loans.prepaid_interest_period) as purchase_amount,

    (funding_request_amount

        - least(loans.purchase_price * loans.first_distribution_percentage,  loans.funding_request_amount - loans.funding_request_amount * loans.annual_percentage_rate / 12 * loans.prepaid_interest_period)

        - loans.funding_request_amount * loans.annual_percentage_rate / 12 * loans.prepaid_interest_period) as construction_holdback,

    loans.funding_request_amount

    - loans.funding_request_amount * loans.origination_fee_percentage

    - loans.legal_closing_fee

    - loans.funding_request_amount * loans.annual_percentage_rate / 12 * loans.prepaid_interest_period

    - (loans.funding_request_amount * loans.annual_percentage_rate / 360) * ((extract(day from (date_trunc('month', loans.origination_date::date) + interval '1 month' - interval '1 day')::date) + 1) - extract(day from loans.origination_date::date))

    --construction holdback
    - (funding_request_amount

        - least(loans.purchase_price * loans.first_distribution_percentage,  loans.funding_request_amount - loans.funding_request_amount * loans.annual_percentage_rate / 12 * loans.prepaid_interest_period)

        - loans.funding_request_amount * loans.annual_percentage_rate / 12 * loans.prepaid_interest_period)

    - loans.loan_management_fee

    - loans.broker_fee_percentage * loans.funding_request_amount

    - loans.broker_processing_fee

    + loans.borrower_deposit as net_proceeds_disbursed,

    ((loans.funding_request_amount * loans.annual_percentage_rate / 12) * loans.prepaid_interest_period) as prepaid_interest,

    (loans.funding_request_amount * loans.annual_percentage_rate / 360)

    * ((extract(day from (date_trunc('month', loans.origination_date::date)

    + interval '1 month' - interval '1 day')::date) + 1)

    - extract(day from loans.origination_date::date)) as stub_interest,

    loans.funding_request_amount*loans.annual_percentage_rate/12 as normal_interest

    from loans) as ac on loans.id = ac.id

) as level_two on loans.deal_id = level_two.deal_id

Left join

    (SELECT

    investments.deal_id as deal_id,

    sum(investments.amount_investing) as amount_invested

    FROM investments

    left join investor_accreditations as ia on ia.user_id = investments.user_id

    left join users on users.id = investments.user_id

    left join fa_investors as fai on investments.fa_investor_id = fai.id

    left join entities as e on fai.entity_id = e.id

    where investments.status ='invested'

    and investments.id <>85

    group by investments.deal_id)

as level_three on loans.deal_id = level_three.deal_id

where (deals.status_code = 6 or deals.status_code = 7)

order by Cash_left_in_Deal desc

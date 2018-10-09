import humanize from 'string-humanize';
import date from 'date-and-time';

export function toDollar(dollar){
  let d = new Number(dollar)
  return(
    d.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  )
};

export function snakeCaseToRegular(snakeCase){
  return humanize(snakeCase)
}
export function  prettyDates(date){
    let d = new Date(date);

    return(
        d.toLocaleDateString()
    )

  };

export function toRoundedDollar(amount){
  let d = new Number(amount)
  return(d.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).slice(0,-3))
}

export function toPrettyDollar(amount){
  let d = new Number(amount)
  return(d.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).slice(0,-1))
}

export function toMonthYearString(basicDate){
  var newDate =date.parse(basicDate,'YYYY-MM-DD');
  return date.format(newDate,'MMMM[-]YYYY')
}

export function toDollar(dollar){
  let d = new Number(dollar)
  return(
    d.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  )
};


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

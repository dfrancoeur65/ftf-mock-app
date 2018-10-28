import humanize from 'string-humanize';
import date from 'date-and-time';

export function toDollar(dollar) {
  const d = Number(dollar);
  return (
    d.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  );
}

export function snakeCaseToRegular(snakeCase) {
  return humanize(snakeCase);
}
export function prettyDates(dateString) {
  const d = new Date(dateString);

  return (
    d.toLocaleDateString()
  );
}

export function toRoundedDollar(amount) {
  const d = Number(amount);
  return (d.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).slice(0, -3));
}

export function toPrettyDollar(amount) {
  const d = Number(amount);
  return (d.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).slice(0, -1));
}

export function toMonthYearString(basicDate) {
  const newDate = date.parse(basicDate, 'YYYY-MM-DD');
  return date.format(newDate, 'MMMM[-]YYYY');
}

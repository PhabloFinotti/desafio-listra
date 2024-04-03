export function formatMoney(value: number, lang = 'pt-BR', currency = 'BRL') {
  const formatter = new Intl.NumberFormat(lang, {
      style: 'currency',
      currency,
  });

  return formatter.format(value / 100);
}

export function formatMileage(value: number, lang = 'pt-BR') {
  const formatter = new Intl.NumberFormat(lang);

  return formatter.format(value);
}

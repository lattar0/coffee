export function formatMoney(moneyToFormat: number) {
  const moneyFormated = moneyToFormat
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .slice(2, 7)

  return moneyFormated
}

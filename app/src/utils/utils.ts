export const getPercentage = (partialValue: number, totalValue: number) => {
  if (totalValue === 0) return 0

  return Math.round((partialValue / totalValue) * 100)
}

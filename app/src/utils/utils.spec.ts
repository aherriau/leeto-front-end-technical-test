import { expect, describe, it } from 'vitest'

import { getPercentage } from './utils'

describe('getPercentage', () => {
  it('should returns 0 when the totalValue is 0', () => {
    expect(getPercentage(50, 0)).toBe(0)
  })

  it('should returns 50 when partialValue is half of totalValue', () => {
    expect(getPercentage(50, 100)).toBe(50)
  })

  it('should returns 67 truncated when partialValue is two thirds of totalValue', () => {
    expect(getPercentage(100, 150)).toBe(67)
  })
})

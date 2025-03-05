import { render } from '@testing-library/react'
import { expect, describe, it } from 'vitest'

import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('should renders a ProgressBar with a width corresponding to the percentage', async () => {
    const percentage = 10

    const { findByTestId } = render(<ProgressBar percentage={percentage} />)

    const progressbarContent = findByTestId('progressbar-content')

    expect((await progressbarContent).getAttribute('style')).toBe(
      `width: ${percentage}%;`
    )
  })

  it('should renders a ProgressBar with a width of 100% if the percentage is out of range', async () => {
    const percentage = 102
    const width = 100

    const { findByTestId } = render(<ProgressBar percentage={percentage} />)

    const progressbarContent = findByTestId('progressbar-content')

    expect((await progressbarContent).getAttribute('style')).toBe(
      `width: ${width}%;`
    )
  })
})

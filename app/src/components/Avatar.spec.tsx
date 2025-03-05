import { render } from '@testing-library/react'
import { expect, describe, it } from 'vitest'

import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('should renders an Avatar without outline when no overlap props', async () => {
    const { findByTestId } = render(<Avatar emoji="🙋‍♂️" />)

    const avatarContainer = findByTestId('avatar-container')

    expect((await avatarContainer).classList.toString()).not.toContain(
      '-ml-1 outline-2 outline-white'
    )
  })

  it('should renders an Avatar with outline when overlap props is specified', async () => {
    const { findByTestId } = render(<Avatar emoji="🙋‍♂️" overlap />)

    const avatarContainer = findByTestId('avatar-container')

    expect((await avatarContainer).classList.toString()).toContain(
      '-ml-1 outline-2 outline-white'
    )
  })
})

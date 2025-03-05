import type { Meta, StoryObj } from '@storybook/react'

import { AvatarGroup } from './AvatarGroup'

const meta = {
  title: 'Common/AvatarGroup',
  component: AvatarGroup,
} satisfies Meta<typeof AvatarGroup>

export default meta
type Story = StoryObj<typeof meta>

export const SingleAvatar: Story = {
  args: {
    avatars: ['🙋‍♂️'],
  },
}

export const SeveralAvatars: Story = {
  args: {
    avatars: ['🙋‍♂️', '💙', '👶'],
  },
}

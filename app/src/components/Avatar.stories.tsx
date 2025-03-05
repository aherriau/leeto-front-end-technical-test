import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta = {
  title: 'Common/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const BaseAvatar: Story = {
  args: {
    emoji: '🙋‍♂️',
  },
}

export const AvatarWithOverlap: Story = {
  args: {
    ...BaseAvatar.args,
    overlap: true,
  },
}

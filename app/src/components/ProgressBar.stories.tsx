import type { Meta, StoryObj } from '@storybook/react'

import { ProgressBar } from './ProgressBar'

const meta = {
  title: 'Common/ProgressBar',
  component: ProgressBar,
  argTypes: {
    percentage: {
      control: { type: 'range' },
    },
  },
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof meta>

export const BaseProgressBar: Story = {
  args: {
    percentage: 30,
  },
}

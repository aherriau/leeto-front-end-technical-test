import type { Meta, StoryObj } from '@storybook/react'
import { mdiTextBoxCheckOutline } from '@mdi/js'

import { BeneficiaryCard } from './BeneficiaryCard'

const meta = {
  title: 'GiftCard/BeneficiaryCard',
  component: BeneficiaryCard,
} satisfies Meta<typeof BeneficiaryCard>

export default meta
type Story = StoryObj<typeof meta>

export const BeneficiaryCardSkeleton: Story = {
  args: {
    icon: mdiTextBoxCheckOutline,
    title: 'Merci bien !',
    content: 'Mais je vous en prie.',
  },
}

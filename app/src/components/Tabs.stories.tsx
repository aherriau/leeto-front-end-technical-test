import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'

import { Tabs } from './Tabs'

const meta = {
  title: 'Common/Tabs',
  component: Tabs,
  parameters: {
    viewport: {
      defaultViewport: 'reset',
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const DesktopTabs: Story = {
  args: {
    tabs: [
      {
        name: 'active',
        label: 'Actives',
      },
      {
        name: 'archived',
        label: 'Clôturées',
      },
    ],
    activeTab: 'active',
    onTabClick: () => {
      return
    },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs()

    function onTabClick(tabName: string) {
      updateArgs({ activeTab: tabName })
    }

    return <Tabs {...args} onTabClick={onTabClick} />
  },
}

export const MobileTabs: Story = {
  args: {
    ...DesktopTabs.args,
  },
  render: DesktopTabs.render,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
}

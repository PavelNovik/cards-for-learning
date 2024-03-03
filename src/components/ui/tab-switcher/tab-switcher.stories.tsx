import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/typography'

import { TabsSwitcher } from './tab-switcher'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['start', 'middle', 'end'],
    },
  },
  component: TabsSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabsSwitcher>

export default meta
type Story = StoryObj<typeof TabsSwitcher | typeof meta>

export const tab: Story = {
  args: {
    disable: false,
    values: [{ value: 'Switcher' }],
  },
}

export const TabSwitchers: Story = {
  render: () => (
    <>
      <Typography textStyle={'body2'} variant={'dark'}>
        Title
      </Typography>
      <TabsSwitcher
        values={[
          { value: 'Switcher1' },
          { value: 'Switcher2' },
          { value: 'Switcher3' },
          { value: 'Switcher4' },
          { value: 'Switcher5' },
        ]}
      />
    </>
  ),
}

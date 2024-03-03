import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMain } from '@/components/ui/drop-down'

const meta = {
  component: DropdownMain,
  decorators: [
    Story => (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/DropdownMainMenu',
} satisfies Meta<typeof DropdownMain>

export default meta
type Story = StoryObj<typeof meta>

export const WithIcon: Story = {
  args: {},
}

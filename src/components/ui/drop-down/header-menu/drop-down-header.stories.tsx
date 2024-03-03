import type { Meta, StoryObj } from '@storybook/react'

import { DropdownHeader } from '@/components/ui/drop-down/header-menu/dropdown-header'

const meta = {
  component: DropdownHeader,
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
  title: 'Components/DropdownHeaderMenu',
} satisfies Meta<typeof DropdownHeader>

export default meta
type Story = StoryObj<typeof meta>

export const WithAvatar: Story = {
  args: {},
}

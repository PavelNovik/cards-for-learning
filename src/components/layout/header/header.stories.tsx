import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/components/layout/header/header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultWithButton: Story = {
  args: {
    loggedIn: false,
  },
}
export const DefaultWithAvatar: Story = {
  args: {
    loggedIn: true,
  },
}

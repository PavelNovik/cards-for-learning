import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components/ui/card/card'

const meta = {
  argTypes: {
    variant: {},
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const card: Story = {
  args: {
    children: '',
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import { DataType, Radio } from './radio'

const meta = {
  component: Radio,
  tags: ['autodocs'],
  title: 'Components/Radio-buttons',
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

const data: DataType[] = [
  { id: '1', label: 'Jeszcze ' },
  { id: '2', label: 'Polska ' },
  { id: '3', label: 'nie ' },
  { id: '4', label: 'zginęła' },
]

export const Primary: Story = {
  args: {
    data,
    defaultValue: '2',
  },
}

export const Disabled: Story = {
  args: {
    data,
    defaultValue: '2',
    disabled: true,
  },
}

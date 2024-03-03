import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from './checkbox'

const meta = {
  argTypes: {},
  component: CheckBox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof CheckBox | typeof meta>

export const checkboxWithoutLable: Story = {
  args: {
    disabled: false,
    name: 'checkbox',
  },
}
export const checkboxWithLable: Story = {
  args: {
    disabled: false,
    label: 'Check-box',
    name: 'checkbox',
  },
}

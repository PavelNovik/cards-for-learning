import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

const meta = {
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputDefault: Story = {
  args: {
    label: 'InputDefault',
    placeholder: 'placeholder',
    type: 'text',
  },
}
export const InputPassword: Story = {
  args: {
    label: 'Label',
    placeholder: 'placeholder',
    type: 'password',
  },
}
export const InputError: Story = {
  args: {
    errorMessage: 'error message',
    label: 'Label',
    placeholder: 'placeholder',
    type: 'text',
  },
}
export const InputSearch: Story = {
  args: {
    label: 'Label',
    placeholder: 'Search',
    type: 'search',
  },
}

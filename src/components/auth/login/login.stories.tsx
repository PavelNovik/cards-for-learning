import type { Meta, StoryObj } from '@storybook/react'

import { Login } from '@/components/auth/login/login'

const meta = {
  component: Login,
  tags: ['autodocs'],
  title: 'Components/Auth/LoginForm',
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

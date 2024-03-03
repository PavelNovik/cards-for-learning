import { NewPassword } from '@/components/auth/new-password/new-password'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: NewPassword,
  tags: ['autodocs'],
  title: 'Components/Auth/NewPasswordForm',
} satisfies Meta<typeof NewPassword>

export default meta
type Story = StoryObj<typeof meta>
export const NewPasswordForm: Story = {}

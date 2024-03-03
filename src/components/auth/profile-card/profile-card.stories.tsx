import { ProfileCard } from '@/components/auth/profile-card/profile-card'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ProfileCard,
  tags: ['autodocs'],
  title: 'Components/Auth/ProfileCardForm',
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>
export const ProfileCardForm: Story = {}

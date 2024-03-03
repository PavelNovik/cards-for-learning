import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from '@/components/ui/slider/slider'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof Slider | typeof meta>

export const slider: Story = {
  args: {
    value: [0, 100],
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

const text = 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'

export const h1: Story = {
  args: {
    as: 'h1',
    children: text,
    textStyle: 'h1',
    variant: 'dark',
  },
}
export const h2: Story = {
  args: {
    as: 'h2',
    children: text,
    textStyle: 'h2',
    variant: 'dark',
  },
}

export const h3: Story = {
  args: {
    as: 'h3',
    children: text,
    textStyle: 'h3',
    variant: 'dark',
  },
}

export const h4: Story = {
  args: {
    as: 'h4',
    children: text,
    textStyle: 'h4',
    variant: 'dark',
  },
}
export const body1: Story = {
  args: {
    children: text,
    textStyle: 'body1',
    variant: 'dark',
  },
}
export const subtitle1: Story = {
  args: {
    children: text,
    textStyle: 'subtitle1',
    variant: 'dark',
  },
}
export const body2: Story = {
  args: {
    children: text,
    textStyle: 'body2',
    variant: 'dark',
  },
}

export const subtitle2: Story = {
  args: {
    children: text,
    textStyle: 'subtitle2',
    variant: 'dark',
  },
}
export const caption: Story = {
  args: {
    children: text,
    textStyle: 'caption',
    variant: 'dark',
  },
}
export const overline: Story = {
  args: {
    children: text,
    textStyle: 'overline',
    variant: 'dark',
  },
}
export const link1: Story = {
  args: {
    // as: 'a',
    children: text,
    // href: '#',
    textStyle: 'link1',
    variant: 'dark',
  },
}
export const link2: Story = {
  args: {
    // as: 'a',
    children: text,
    // href: '#',
    textStyle: 'link2',
    variant: 'dark',
  },
}

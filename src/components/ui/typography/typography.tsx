import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'span'> = {
  as?: T
  children: ReactNode
  className?: string
  textStyle: string
  variant?: 'dark' | 'light'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'span'>(props: TypographyProps<T>) => {
  const { as: Component = 'span', className, textStyle, variant = 'light', ...rest } = props

  return (
    <Component
      className={clsx(!s[textStyle].includes('link') && s[variant], s[textStyle], className)}
      {...rest}
    />
  )
}

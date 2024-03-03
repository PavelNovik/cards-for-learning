import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

export type CardT<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<T>
export const Card = <T extends ElementType = 'div'>(props: CardT<T>) => {
  const { as: Component = 'div', className, ...rest } = props

  return <Component className={clsx(s.Card, className)} {...rest} />
}

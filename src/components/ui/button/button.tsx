import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  ReactElement,
  ReactNode,
  forwardRef,
} from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

type InferType<T> = T extends ElementType<infer U> ? U : never

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: ForwardedRef<InferType<T>>) => {
    const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

    return (
      <Component
        className={clsx(s[variant], fullWidth && s.fullWidth, className)}
        ref={ref}
        {...rest}
      />
    )
  }
)

export default Button as <T extends ElementType = 'button'>(
  props: ButtonProps<T> & { ref?: ForwardedRef<ElementRef<T>> }
) => ReactElement

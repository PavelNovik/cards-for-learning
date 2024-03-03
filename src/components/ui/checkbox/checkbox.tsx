import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  label: string
  name: string
  onValueChange?: (checked: boolean) => void
} & ComponentPropsWithoutRef<'button'>

export const CheckBox = forwardRef<ElementRef<'button'>, CheckboxProps>((props, ref) => {
  const { checked, className, label, name, onValueChange, ...rest } = props

  const classNames = {
    checkboxContainer: clsx(s.CheckboxIndicatorContainer, className),
    checkboxIndicator: clsx(s.CheckboxIndicator, className),
    checkboxRoot: clsx(s.CheckboxRoot, className),
    label: clsx(s.Label, className),
  }

  return (
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <Checkbox.Root
        className={classNames.checkboxRoot}
        id={name}
        onCheckedChange={onValueChange}
        {...rest}
        ref={ref}
      >
        <div className={classNames.checkboxContainer}>
          <Checkbox.Indicator className={classNames.checkboxIndicator}>
            <CheckIcon />
          </Checkbox.Indicator>
        </div>
      </Checkbox.Root>
      <label className={classNames.label} htmlFor={name}>
        <Typography textStyle={'body2'} variant={'dark'}>
          {label}
        </Typography>
      </label>
    </div>
  )
})

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './dropdown.module.scss'

export const DropdownMenu = DropdownMenuPrimitive.Root

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

export const DropdownMenuContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ align = 'end', children, className, sideOffset = 5, ...rest }, ref) => {
  const classNames = {
    arrow: clsx(s.DropdownMenuArrow, className),
    content: clsx(s.DropdownMenuContent, className),
  }

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        align={align}
        className={classNames.content}
        ref={ref}
        sideOffset={sideOffset}
        {...rest}
      >
        <DropdownMenuPrimitive.Arrow className={classNames.arrow} />
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  )
})

export const DropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...rest }, ref) => {
  return (
    <DropdownMenuPrimitive.Item
      className={clsx(s.DropdownMenuItem, className)}
      ref={ref}
      {...rest}
    />
  )
})

export const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...rest }, ref) => {
  return (
    <DropdownMenuPrimitive.Separator
      className={clsx(s.DropdownMenuSeparator, className)}
      ref={ref}
      {...rest}
    />
  )
})

export const DropdownMenuLabel = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Label>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className, ...rest }, ref) => {
  return (
    <DropdownMenuPrimitive.Separator
      className={clsx(s.DropdownMenuLabel, className)}
      ref={ref}
      {...rest}
    />
  )
})

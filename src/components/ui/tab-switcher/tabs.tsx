import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './tabs.module.scss'
export const Tabs = TabsPrimitive.Root

export const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...rest }, ref) => {
  return <TabsPrimitive.List className={clsx(s.TabsList, className)} ref={ref} {...rest} />
})

export const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...rest }, ref) => {
  return <TabsPrimitive.Trigger className={clsx(s.TabsTrigger, className)} ref={ref} {...rest} />
})

export const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...rest }, ref) => {
  return <TabsPrimitive.Content className={clsx(s.TabsTrigger, className)} ref={ref} {...rest} />
})

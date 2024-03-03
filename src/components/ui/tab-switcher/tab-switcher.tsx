import { ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'

import { Tabs, TabsList, TabsTrigger } from './tabs'

type TabsData = {
  value: string
}

export type TabsProps = {
  children?: ReactNode
  className?: string
  disable?: boolean
  values: TabsData[]
  variant?: 'end' | 'middle' | 'start'
}

export const TabsSwitcher = (props: TabsProps) => {
  const { className, disable = false, values, variant, ...rest } = props

  return (
    <>
      <Tabs defaultValue={values.length > 1 ? values[0].value : ''} {...rest}>
        <TabsList>
          {values.map((v, i) => (
            <TabsTrigger data-position={variant} disabled={disable} key={i} value={v.value}>
              <Typography textStyle={'body1'} variant={'dark'}>
                {v.value}
              </Typography>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </>
  )
}

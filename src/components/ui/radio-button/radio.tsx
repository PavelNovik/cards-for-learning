import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadioGroup from '@radix-ui/react-radio-group'

import style from './radio.module.scss'

export type RadioProps = {
  data: DataType[]
  defaultValue?: string
  disabled?: boolean
  name?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'div'>

export type DataType = { id: string; label: string }

export const Radio = ({ data, defaultValue, disabled }: RadioProps) => {
  return (
    <form>
      <RadioGroup.Root
        aria-label={'View density'}
        className={style.RadioGroupRoot}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        {data.map(value => {
          return (
            <div className={style.RadioGroupWrapper} key={value.id}>
              <RadioGroup.Item className={style.RadioGroupItem} id={'r1'} value={value.id}>
                <div className={style.RadioGroupIndicatorEmptyCircle}>
                  <RadioGroup.Indicator className={style.RadioGroupIndicator} />
                </div>
              </RadioGroup.Item>
              <Typography
                as={'label'}
                className={style.label}
                data-disabled={disabled}
                textStyle={'body2'}
              >
                {value.label}
              </Typography>
            </div>
          )
        })}
      </RadioGroup.Root>
    </form>
  )
}

import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect } from 'react'

import { Typography } from '@/components/ui/typography'
import * as SliderPrimitive from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './slider.module.scss'

export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  Omit<ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'value'> & {
    value: (null | number)[]
  }
>(({ className, max, onValueChange, value, ...rest }, ref) => {
  const classNames = {
    container: clsx(s.SliderContainer, className),
    range: clsx(s.SliderRange, className),
    root: clsx(s.SliderRoot, className),
    thumb: clsx(s.SliderThumb, className),
    track: clsx(s.SliderTrack, className),
    value: clsx(s.SliderValue, className),
  }

  useEffect(() => {
    if (value?.[1] === undefined || value?.[1] === null) {
      onValueChange?.([value?.[0] ?? 0, max ?? 0])
    }
  }, [max, value, onValueChange])

  // const [value, setValue] = React.useState([2, 10])

  return (
    <div className={classNames.container}>
      <span className={classNames.value}>
        <Typography textStyle={'body1'} variant={'dark'}>
          {value?.[0]}
        </Typography>
      </span>
      <SliderPrimitive.Root
        className={classNames.root}
        max={max}
        onValueChange={onValueChange}
        ref={ref}
        {...rest}
        value={[value?.[0] ?? 0, value?.[1] ?? max ?? 0]}
      >
        <SliderPrimitive.Track className={classNames.track}>
          <SliderPrimitive.Range className={classNames.range} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={classNames.thumb} />
        <SliderPrimitive.Thumb className={classNames.thumb} />
      </SliderPrimitive.Root>
      <span className={classNames.value}>
        <Typography textStyle={'body1'} variant={'dark'}>
          {value?.[1]}
        </Typography>
      </span>
    </div>
  )
})

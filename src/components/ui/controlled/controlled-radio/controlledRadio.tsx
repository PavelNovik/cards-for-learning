import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Radio, RadioProps } from '@/components/ui'

type ControlledRadioProps<T extends FieldValues> = Pick<
  UseControllerProps<T>,
  'control' | 'defaultValue' | 'name'
> &
  Omit<RadioProps, 'defaultValue' | 'name' | 'onValueChange'>

export const ControlledRadio = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  ...rest
}: ControlledRadioProps<T>) => {
  const {
    field: { onChange },
  } = useController({
    control,
    defaultValue,
    name,
  })

  return <Radio {...rest} defaultValue={defaultValue} id={name} onValueChange={onChange} />
}

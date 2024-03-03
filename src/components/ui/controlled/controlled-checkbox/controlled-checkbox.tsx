import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CheckBox, CheckboxProps } from '@/components/ui'
type ControlledCheckboxProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'rules'
> &
  Omit<CheckboxProps, 'checked' | 'onValueChange'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  shouldUnregister,
  ...rest
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({ control, disabled: rest.disabled, name: rest.name, shouldUnregister })

  return <CheckBox {...rest} checked={value} onValueChange={onChange} />
}

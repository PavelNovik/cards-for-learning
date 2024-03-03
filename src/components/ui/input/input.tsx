import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLInputTypeAttribute,
  forwardRef,
  useState,
} from 'react'

import { CloseSvg, EyeOffSvg, EyeOnSvg, SearchSvg } from '@/assets/icons'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import style from './input.module.scss'

export type InputProps = {
  className?: string
  errorMessage?: string
  label?: string
  onClearInput?: () => void
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<ElementRef<'div'>, InputProps>((props, ref) => {
  const {
    className,
    errorMessage,
    label,
    onChange,
    onClearInput,
    onValueChange,
    placeholder,
    type = 'text',
    ...rest
  } = props
  const [showIcon, setShowIcon] = useState(true)
  const [isSearchActive, setIsSearchActive] = useState(false)

  const showIconHandler = () => setShowIcon(prev => !prev)
  const clearInputHandler = () => {
    onValueChange?.('')
    onClearInput?.()
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onValueChange?.(e.target.value)
  }

  const generateType = (type: HTMLInputTypeAttribute, showIcon: boolean) => {
    if (type === 'password' && showIcon) {
      return 'password'
    } else {
      return 'text'
    }
  }

  return (
    <div
      className={clsx(style.root, className)}
      onBlur={() => setIsSearchActive(false)}
      onFocus={() => setIsSearchActive(true)}
      ref={ref}
    >
      <Typography textStyle={'body2'}>{label}</Typography>
      <div className={clsx(style.inputContainer, errorMessage && style.error)}>
        {type === 'search' && <SearchSvg className={style.leftIcon} />}
        <div className={style.inputWrapper}>
          <input
            className={clsx(style.input)}
            onChange={handleChange}
            placeholder={placeholder}
            type={generateType(type, showIcon)}
            {...rest}
          />
        </div>

        {type === 'password' && (
          <div className={style.rightIcon} onClick={showIconHandler}>
            {showIcon ? <EyeOnSvg /> : <EyeOffSvg />}
          </div>
        )}
        {type === 'search' && isSearchActive && (
          <div className={style.rightIcon} onClick={clearInputHandler}>
            <CloseSvg className={style.closeOutlineIcon} />
          </div>
        )}
      </div>
      {errorMessage && (
        <Typography className={style.errorLabel} textStyle={'caption'}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
})

import { ComponentPropsWithoutRef } from 'react'

import { LogoSvg } from '@/assets/icons/LogoSvg'
import { Button } from '@/components/ui/button'
import { DropdownHeader } from '@/components/ui/drop-down'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import style from './header.module.scss'

type HeaderProps = {
  loggedIn?: boolean
} & ComponentPropsWithoutRef<'div'>

export const Header = ({ loggedIn }: HeaderProps) => {
  return (
    <header className={clsx(style.header)}>
      <div>
        <LogoSvg />
      </div>
      {loggedIn ? (
        <div className={style.userWrapper}>
          <Typography as={'a'} textStyle={'h4'} variant={'dark'}>
            Slawomir
          </Typography>
          <DropdownHeader />
        </div>
      ) : (
        <Button className={style.headerButton} variant={'secondary'}>
          Sign In
        </Button>
      )}
    </header>
  )
}

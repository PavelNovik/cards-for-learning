import { LogoutSvg } from '@/assets/icons'
import { PersonSvg } from '@/assets/icons/PersonSvg'
import avatar from '@/assets/images/avatar.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui'
import { Typography } from '@/components/ui/typography'

import s from './drop-down-header.module.scss'

export const DropdownHeader = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button aria-label={'Customise options'} className={s.IconButton}>
          <img alt={'avatar'} className={s.DropdownMenuAvatar} src={avatar} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div className={s.LeftSlot}>
            <img alt={'avatar'} className={s.DropdownMenuAvatar} src={avatar} />
          </div>
          <div className={s.RightSlot}>
            <Typography textStyle={'subtitle2'} variant={'dark'}>
              Ivan
            </Typography>
            <Typography className={s.DropdownMenuUserData} textStyle={'caption'} variant={'dark'}>
              j&johnson@gmail.com
            </Typography>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className={s.LeftSlot}>
            <PersonSvg />
          </div>
          <div className={s.RightSlot}>
            <Typography textStyle={'caption'} variant={'dark'}>
              My Profile
            </Typography>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className={s.LeftSlot}>
            <LogoutSvg />
          </div>
          <div className={s.RightSlot}>
            <Typography textStyle={'caption'} variant={'dark'}>
              Sign Out
            </Typography>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

import { EditSvg, PlaySvg, TrashSvg } from '@/assets/icons'
import { MenuSvg } from '@/assets/icons/MoreVertical'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui'
import { Typography } from '@/components/ui/typography'

import s from './drop-down-main.module.scss'

export const DropdownMain = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button aria-label={'Customise options'} className={s.IconButton}>
          <MenuSvg />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align={'end'} sideOffset={5}>
        <DropdownMenuItem>
          <div className={s.LeftSlot}>
            <PlaySvg />
          </div>
          <div className={s.RightSlot}>
            <Typography textStyle={'caption'} variant={'dark'}>
              Learn
            </Typography>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className={s.LeftSlot}>
            <EditSvg />
          </div>
          <div className={s.RightSlot}>
            <Typography textStyle={'caption'} variant={'dark'}>
              Edit
            </Typography>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className={s.LeftSlot}>
            <TrashSvg />
          </div>
          <div className={s.RightSlot}>
            <Typography textStyle={'caption'} variant={'dark'}>
              Delete
            </Typography>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

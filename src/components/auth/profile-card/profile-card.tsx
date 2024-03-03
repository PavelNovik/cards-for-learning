import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { EditSvg, LogoutSvg } from '@/assets/icons'
import ava from '@/assets/images/avatar.png'
import { Button, Card, Typography } from '@/components/ui'
import { Container } from '@/components/ui/container/container'
import { ControlledInput } from '@/components/ui/controlled/controlled-input/controlledInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './profile-card.module.scss'

export type ProfileField = z.infer<typeof schema>

const schema = z.object({
  nickname: z.string().min(1).trim(),
})

export const ProfileCard = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ProfileField>({
    defaultValues: { nickname: '' },
    resolver: zodResolver(schema),
  })
  const [isEditable, setIsEditable] = useState(false)

  const onClickHandler = () => {
    setIsEditable(true)
  }
  const onSubmitHandler = (data: ProfileField) => {
    console.log(data)
    setIsEditable(false)
  }

  return (
    <Card className={s.card}>
      <Container className={s.container}>
        <Typography as={'h1'} className={s.header} textStyle={'h1'} variant={'dark'}>
          Personal Information
        </Typography>

        <Container className={s.buttonContainer}>
          <Container className={s.imageContainer}>
            <img alt={'profile'} src={ava} />
            {!isEditable && (
              <Button className={s.svgBtn} type={'button'} variant={'secondary'}>
                <EditSvg className={s.svg} />
              </Button>
            )}
          </Container>
          {!isEditable && (
            <>
              {' '}
              <Typography className={s.profileName} textStyle={'h2'} variant={'dark'}>
                Ivan{' '}
                <Button
                  className={s.editProfileBtn}
                  onClick={onClickHandler}
                  type={'button'}
                  variant={'secondary'}
                >
                  <EditSvg />
                </Button>
              </Typography>
              <Typography className={s.instruction} textStyle={'body2'} variant={'dark'}>
                j&johnson@gmail.com
              </Typography>
              <Button className={s.button} type={'submit'} variant={'secondary'}>
                <LogoutSvg />
                <Typography textStyle={'subtitle2'} variant={'dark'}>
                  Logout
                </Typography>
              </Button>
            </>
          )}
          {isEditable && (
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <ControlledInput
                className={s.nicknameField}
                control={control}
                errorMessage={errors.nickname?.message}
                label={'Nickname'}
                name={'nickname'}
                type={'text'}
              />
              <Button className={s.button} fullWidth type={'submit'}>
                Save Changes
              </Button>
            </form>
          )}
        </Container>
      </Container>
    </Card>
  )
}

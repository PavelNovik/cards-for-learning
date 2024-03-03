import { CheckEmailSvg } from '@/assets/icons/CheckEmail'
import { Button, Card, Typography } from '@/components/ui'
import { Container } from '@/components/ui/container/container'

import s from './check-email.module.scss'

export const CheckEmail = () => {
  return (
    <Card className={s.card}>
      <Container className={s.container}>
        <Typography as={'h1'} className={s.header} textStyle={'h1'} variant={'dark'}>
          Check Email
        </Typography>
        <Container className={s.iconContainer}>
          <CheckEmailSvg />
        </Container>

        <Typography className={s.instruction} textStyle={'body2'} variant={'dark'}>
          We’ve sent an Email with instructions to example@mail.com
        </Typography>

        <Button className={s.button} fullWidth type={'submit'} variant={'primary'}>
          <Typography textStyle={'subtitle2'} variant={'dark'}>
            Send Instructions
          </Typography>
        </Button>
      </Container>
    </Card>
  )
}

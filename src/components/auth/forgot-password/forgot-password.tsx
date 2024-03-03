import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/components/ui'
import { Container } from '@/components/ui/container/container'
import { ControlledInput } from '@/components/ui/controlled/controlled-input/controlledInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-password.module.scss'

type FormValues = z.infer<typeof forgotPassSchema>

const forgotPassSchema = z.object({
  email: z.string().email('Invalid email'),
})

export const ForgotPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPassSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Card className={s.card}>
      <Container className={s.container}>
        <Typography as={'h1'} className={s.header} textStyle={'h1'} variant={'dark'}>
          Forgot your password?
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlledInput
            className={s.formInput}
            control={control}
            errorMessage={errors.email?.message}
            label={'Email'}
            name={'email'}
            placeholder={'Enter email'}
            type={'text'}
          />
          <Typography className={s.instruction} textStyle={'body2'} variant={'dark'}>
            Enter your email address and we will send you further instructions{' '}
          </Typography>

          <Button className={s.button} fullWidth type={'submit'} variant={'primary'}>
            <Typography textStyle={'subtitle2'} variant={'dark'}>
              Send Instructions
            </Typography>
          </Button>
        </form>
        <Typography className={s.note} textStyle={'body2'} variant={'dark'}>
          Did you remember your password?
        </Typography>
        <Typography as={'a'} className={s.link} href={'#'} textStyle={'link1'} variant={'dark'}>
          Try logging in
        </Typography>
      </Container>
    </Card>
  )
}

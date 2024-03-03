import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/components/ui'
import { Container } from '@/components/ui/container/container'
import { ControlledInput } from '@/components/ui/controlled/controlled-input/controlledInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './new-password.module.scss'

type FormValues = z.infer<typeof newPassSchema>

const newPassSchema = z.object({
  password: z.string().min(3),
})

export const NewPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(newPassSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Card className={s.card}>
      <Container className={s.container}>
        <Typography as={'h1'} className={s.header} textStyle={'h1'} variant={'dark'}>
          Create new password
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlledInput
            className={s.formInput}
            control={control}
            errorMessage={errors.password?.message}
            label={'Password'}
            name={'password'}
            placeholder={'Enter password'}
            type={'password'}
          />
          <Typography className={s.instruction} textStyle={'body2'} variant={'dark'}>
            Create new password and we will send you further instructions to email
          </Typography>

          <Button className={s.button} fullWidth type={'submit'} variant={'primary'}>
            <Typography textStyle={'subtitle2'} variant={'dark'}>
              Create New Password
            </Typography>
          </Button>
        </form>
      </Container>
    </Card>
  )
}

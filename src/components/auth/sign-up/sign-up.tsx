import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container/container'
import { ControlledInput } from '@/components/ui/controlled/controlled-input/controlledInput'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up.module.scss'

type FormValues = z.infer<typeof signUpSchema>

const signUpSchema = z
  .object({
    confirmPassword: z.string().min(3),
    email: z.string().email('Invalid email'),
    password: z.string().min(3),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export const SignUp = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Card className={s.card}>
      <Container className={s.container}>
        <Typography as={'h1'} className={s.header} textStyle={'h1'} variant={'dark'}>
          Sign Up
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
          <ControlledInput
            className={s.formInput}
            control={control}
            errorMessage={errors.password?.message}
            label={'Password'}
            name={'password'}
            placeholder={'Enter password'}
            type={'password'}
          />
          <ControlledInput
            className={s.formInput}
            control={control}
            errorMessage={errors.confirmPassword?.message}
            label={'Confirm password'}
            name={'confirmPassword'}
            placeholder={'Confirm password'}
            type={'password'}
          />
          <Button className={s.button} fullWidth type={'submit'} variant={'primary'}>
            <Typography textStyle={'subtitle2'} variant={'dark'}>
              Sign Up
            </Typography>
          </Button>
        </form>
        <Typography className={s.note} textStyle={'body2'} variant={'dark'}>
          Already have an account?
        </Typography>
        <Typography as={'a'} className={s.link} href={'#'} textStyle={'link1'} variant={'dark'}>
          Sign In
        </Typography>
      </Container>
    </Card>
  )
}

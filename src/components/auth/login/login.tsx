import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledInput } from '@/components/ui/controlled/controlled-input/controlledInput'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import style from './login.module.scss'

export type LoginProps = {
  onSubmit: (data: LoginFields) => void
}

export type LoginFields = z.infer<typeof schema>

const schema = z.object({
  email: z.string().min(1).trim().email('Invalid email'),
  password: z.string().trim().min(4, { message: 'Must be 4 or more characters long' }),
  rememberMe: z.boolean().optional(),
})

export const Login = ({ onSubmit }: LoginProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFields>({
    defaultValues: { email: '', password: '', rememberMe: false },
    resolver: zodResolver(schema),
  })

  return (
    <Card className={style.card}>
      <Typography className={style.title} textStyle={'h1'} variant={'dark'}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          className={style.inputOne}
          control={control}
          errorMessage={errors.email?.message}
          label={'Email'}
          name={'email'}
          type={'email'}
        />
        <ControlledInput
          className={style.inputTwo}
          control={control}
          errorMessage={errors.password?.message}
          label={'Password'}
          name={'password'}
          type={'password'}
        />
        <div className={style.checkboxWrapper}>
          <div className={style.checkbox}>
            <ControlledCheckbox control={control} label={'Check-box'} name={'rememberMe'} />
          </div>
        </div>

        <div className={style.forgot}>
          <Typography as={'a'} textStyle={'body2'} variant={'dark'}>
            Forgot Password?
          </Typography>
        </div>
        <Button className={style.button} fullWidth type={'submit'}>
          Submit
        </Button>
      </form>
      <Typography className={style.noAcc} textStyle={'body2'}>
        {"Don't have an account?"}
      </Typography>
      <Typography as={'a'} className={style.signUp} textStyle={'h4'}>
        Sign Up
      </Typography>
    </Card>
  )
}

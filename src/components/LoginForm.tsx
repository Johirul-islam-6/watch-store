'use client';



import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loginUser } from '@/redux/features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface LoginFormInputs {
  email: string;
  password: string;
}

export function LoginForm({ className, ...props }: UserAuthFormProps) {


  const dispatch = useAppDispatch()
  const {user, isLoading} = useAppSelector((state => state.user))
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const navigate = useNavigate()

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    dispatch(loginUser({email : data.email, password : data.password}))
    
  };

 useEffect( () =>{

 if(user.email && !isLoading){
      navigate('/')
    }
 } ,[user.email, isLoading]) 

  return (
    <>
    
    
    <div className={cn('grid gap-6 w-[50%] mx-auto mt-20 bg-[#8fdaeb] px-10 py-5', className)} {...props}>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-center text-3xl text-white py-14'>Login from</h1>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <Input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <Button disabled={isLoading}>
            {isLoading && <p>loading</p>}
            Login with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? <p>loading</p> : <p>GitHub</p>}
      </Button>
    </div>
    </>
  );
}

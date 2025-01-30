'use client';
import Input from '../components/input/input';
import { useState, useCallback, useEffect } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import AuthSocialButton from './AuthSocialButton';
import { BsGoogle } from 'react-icons/bs';
import Link from 'next/link';
import axios from 'axios'; 
import { toast } from 'react-hot-toast';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === 'LOGIN' ? 'REGISTER' : 'LOGIN'));
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: '', email: '', password: '' },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      axios
        .post('/api/signup', data)
        .then(() => {
          toast.success('Account created!');
          signIn('credentials', data);
        })
        .catch((err) => {
          const errorCode = err.response.status;

          if (errorCode === 400) {
            toast.error('Please enter your name, email and password!');
          } else if (errorCode === 409) {
            toast.error('Email already exists!');
          } else {
            toast.error('Something went wrong!');
          }
        })
        .finally(() => setIsLoading(false));
    }

    if (variant === 'LOGIN') {
      signIn('credentials', {
        ...data,
        redirect: false,
      })
        .then((res) => {
          if (res?.error) {
            toast.error(res.error);
          }

          if (res?.ok && !res?.error) {
            toast.success('Entering Nextjs-Drizzle!');
            router.push('/dashboard');
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, {
      redirect: true,
      callbackUrl: '/dashboard'
    })
      .then((res) => {
        if (res?.error) {
          toast.error(res.error);
        }

        if (res?.ok && !res?.error) {
          toast.success('Entering Nextjs-Drizzle!');
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section className="m-20 sm:mx-auto sm:w-full sm:max-w-md relative">
       <div
      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl">
    </div>
      <div className=" px-4 py-8 shadow-lg rounded-lg sm:px-10 bg-[#573b8a] relative ">
      <div
      className="absolute  bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
        {/* Auth Form (Login/Register) */}
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input
              id="name"
              label="Name"
              value="Enter your name"
              register={register}
              errors={errors}
              disabled={isLoading}
              
            />
          )}
          <Input
            id="email"
            type="email"
            label="Email Address"
            value="Enter your email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            type="password"
            label="Password"
            value="Enter your password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />

          <div>
            <button disabled={isLoading} type="submit" className='bg-gradient-to-r from-cyan-400 to-sky-500 px-2 py-2 text-white rounded-md w-full' >
              {variant === 'REGISTER' ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </form>


        {/* Social Login Buttons */}
        <article className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>

            <div className="relative flex justify-center text-sm">
              <span className="bg-[#e0dede] rounded-sm px-2 text-gray-700 ">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2 ">
      
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
            
          </div>
        </article>

        {/* Toggle Login/Register */}
        <div className="flex gap-2 justify-center items-center text-sm mt-6 px-2 text-white">
          <span>
            {variant === 'REGISTER'
              ? 'Already have an account?'
              : 'New to Nextjs-Drizzle?'}
          </span>
          <button
            onClick={toggleVariant}
            className="underline text-blue-500 hover:text-blue-600"
          >
            {variant === 'REGISTER' ? 'Sign in' : 'Sign up'}
          </button>
          <Link className='m-2' href="/">Home</Link>
        </div>
      </div>
    </section>
  );
};
export default AuthForm;
'use client';
import { nu_api_base_url } from '@/app/Constants';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import NuLoad from '@/components/ui/util/load';
import { Divider, TextInput } from '@tremor/react';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const GoogleIcon = (props: any) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z" />
  </svg>
);

export default function Example() {
  const [eye, setEye] = useState<boolean>(false);
  const [passwordType, setPasswordType] = useState<"text" | "password">("password");
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [number, setNumber] = useState<string>("")
  const  [load, setLoad] = useState<boolean>(false)
  const router = useRouter()

  const userDetails = {
    name: name,
    number: number,
    email: email,
    acount: "business",  // Default value
    password: password
  };

  const postUserDetails = async () => {
    setLoad(true)
    try {
      const response = await axios.post(`${nu_api_base_url}/auth/register`, userDetails);
      console.log('User created successfully:', response.data);
      setLoad(false)
      router.push('/auth/login')
    } catch (error) {
      console.error('Error creating user:', error);
      setLoad(false)
    }
  };
  const togglePasswordVisibility = () => {
    setEye(!eye);
    setPasswordType(eye ? "password" : "text");
  };

  if(load){
    return (
      <div className='h-full  '>
        <NuLoad />
      </div>
    )
  }
  
  return (
    <div className='p-5'>
      <Card>
        <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-10 lg:px-6">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h3 className="text-center text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Create account
            </h3>
            <form action="#" method="post" className="mt-6">
            <div className='pb-5'>
                <label
                  htmlFor="password"
                  className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                >
                  Name
                </label>
                <div className="relative">
                  <TextInput
                    type="text"
                    id="name"
                    name="Name"
                    placeholder='name'
                    className="mt-2 pr-10"
                    onChange={(e)=>{setName(e.target.value)}}
                  />
                </div>
              </div>
              <label
                htmlFor="email"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Email
              </label>
              <TextInput
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="john@company.com"
                className="mt-2"
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              <div className='pb-5 pt-5'>
                <label
                  htmlFor="password"
                  className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                >
                  Number
                </label>
                <div className="relative">
                  <TextInput
                    type="tel"
                    id="name"
                    name="Name"
                    placeholder='number'
                    className="mt-2 pr-10"
                    onChange={(e)=>{setNumber(e.target.value)}}
                  />
                </div>
              </div>
              <div className='pt-5'>
                <label
                  htmlFor="password"
                  className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                >
                  Create Password
                </label>
                <div className="relative">
                  <TextInput
                    type={passwordType}
                    id="password"
                    name="password"
                    autoComplete="new-password"
                    placeholder='password'
                    className="mt-2 pr-10"
                    onChange={(e)=>{setPassword(e.target.value)}}
                  />
                  <div className='absolute inset-y-0 right-2 flex items-center cursor-pointer' onClick={togglePasswordVisibility}>
                    {!eye ? <EyeOff /> : <Eye />}
                  </div>
                </div>
                <Button
                  className="mt-4 w-full"
                  onClick={postUserDetails}
                >
                  Sign up
                </Button>
              </div>
            </form>
            <div className='p-3'>
              <Divider className=''>or with</Divider>
            </div>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center space-x-2 rounded-tremor-default border border-tremor-border bg-tremor-background py-2 text-tremor-content-strong shadow-tremor-input hover:bg-tremor-background-subtle dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-content-strong dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-background-subtle"
            >
              <GoogleIcon className="size-5" aria-hidden={true} />
              <span className="text-tremor-default font-medium">
                Sign in with Google
              </span>
            </a>
            <p className="mt-4 text-tremor-label text-tremor-content dark:text-dark-tremor-content">
              By signing in, you agree to our{' '}
              <a href="#" className="underline underline-offset-4">
                terms of service
              </a>{' '}
              and{' '}
              <a href="#" className="underline underline-offset-4">
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

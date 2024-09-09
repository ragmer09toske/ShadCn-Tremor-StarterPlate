'use client';
import { nu_api_base_url } from "@/app/Constants";
import useStore from "../../Store";
import NuLoad from "@/components/Tremor/util/load";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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

export default function LoginForm() {
  const [eye, setEye] = useState(false);
  const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [load, setLoad] = useState(false);
  const router = useRouter();
  const setUser = useStore((state) => state.setUser);
  const setLoginToken = useStore((state) => state.setLoginToken);
  const setUserID = useStore((state) => state.setUserID);

  const togglePasswordVisibility = () => {
    setEye(!eye);
    setPasswordType(eye ? 'password' : 'text');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const postUserDetails = async () => {
    setLoad(true);
    try {
      const { data } = await axios.post(`${nu_api_base_url}/auth/login`, credentials);
      const { token, userID } = data;

      setLoginToken(token);
      setUserID(userID);

      // Fetch user object and navigate
      const userResponse = await axios.get(`${nu_api_base_url}/codiac/${userID}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(userResponse.data);
      router.push('/onboarding');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoad(false);
    }
  };

  if (load) {
    return (
      <div className='h-full'>
        <NuLoad />
      </div>
    );
  }

  return (
    <div className='p-5'>
      <Card>
        <div className="flex flex-col justify-center min-h-full px-4 py-10 lg:px-6">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h3 className="text-center font-semibold text-tremor-title dark:text-dark-tremor-content-strong">
              Create account
            </h3>
            <form className="mt-6">
              <label
                htmlFor="email"
                className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="john@company.com"
                className="mt-2"
                onChange={handleChange}
              />

              <div className='pt-5'>
                <label
                  htmlFor="password"
                  className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                >
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={passwordType}
                    id="password"
                    name="password"
                    placeholder="password"
                    className="mt-2 pr-10"
                    onChange={handleChange}
                  />
                  <div className='absolute inset-y-0 right-2 flex items-center cursor-pointer' onClick={togglePasswordVisibility}>
                    {eye ? <Eye /> : <EyeOff />}
                  </div>
                </div>
                <Button className="mt-4 w-full" onClick={postUserDetails}>
                  Sign up
                </Button>
              </div>
            </form>
            <div className='p-3'>
              <Divider>or with</Divider>
            </div>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center space-x-2 py-2 border rounded bg-tremor-background dark:bg-dark-tremor-background shadow-tremor-input hover:bg-tremor-background-subtle dark:border-dark-tremor-border dark:hover:bg-dark-tremor-background-subtle"
            >
              <GoogleIcon className="size-5" aria-hidden={true} />
              <span className="font-medium text-tremor-default">Sign in with Google</span>
            </a>
            <p className="mt-4 text-tremor-label">
              By signing in, you agree to our{' '}
              <a href="#" className="underline">terms of service</a> and{' '}
              <a href="#" className="underline">privacy policy</a>.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

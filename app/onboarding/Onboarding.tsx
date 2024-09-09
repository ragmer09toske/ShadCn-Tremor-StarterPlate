'use client';
import useStore from "../Store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";


import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
  RiDatabase2Line,
} from '@remixicon/react';
import Link from "next/link";
import { useContext } from "react";
import { DashContext } from "../AppContext";

const steps = [
  {
      id: 1,
      type: 'done',
      title: 'Sign in with your account',
      description:
      'To get started, log in with your organization account from your company.',
      href: '#',
    },
    {
      id: 2,
      type: 'in progress',
      title: 'Create your Store',
      description:
      'Connect your Services to the new workspace by using one of 20+ service creaters.',
      href: '#',
    },
    {
      id: 3,
      type: 'open',
      title: 'Manage Your Store',
      description:
      'Generate your first report by using our pre-built templates or easy-to-use report builder.',
      href: '#',
    },
  ];
  
  export default function OnBoarding() {
    const UserDetails = useStore((state) => state.user);
    const {setView} = useContext(DashContext)
    function capitalizeName(name: string) {
      return name.replace(/\b\w/g, (char) => char.toUpperCase());
    }
    return (
      <>
        <div className="sm:mx-auto sm:max-w-lg">
          <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Hello, {capitalizeName(UserDetails?.name || '')}
          </h3>
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Let's set up your Workspace first
          </p>
          <ul role="list" className="mt-8 space-y-3">
            {steps.map((step) =>
              step.type === 'done' ? (
                <li key={step.id} className="relative p-4">
                  <div className="flex items-start">
                    <RiCheckboxCircleFill
                      className="size-6 shrink-0 text-tremor-brand dark:text-dark-tremor-brand"
                      aria-hidden={true}
                    />
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p className="font-medium leading-5 text-tremor-content-strong dark:text-dark-tremor-content-strong">
                        <a href={step.href} className="focus:outline-none">
                          {/* extend link to entire list card */}
                          <span className="absolute inset-0" aria-hidden={true} />
                          {step.title}
                        </a>
                      </p>
                      <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              ) : step.type === 'in progress' ? (
                <Card className="rounded-tremor-default bg-tremor-background-muted p-4 dark:bg-dark-tremor-background-muted">
                  <div className="flex items-start">
                    <RiCheckboxBlankCircleLine
                      className="size-6 shrink-0 text-tremor-brand dark:text-dark-tremor-brand"
                      aria-hidden={true}
                    />
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p className="font-medium leading-5 text-tremor-content-strong dark:text-dark-tremor-content-strong">
                        {step.title}
                      </p>
                      <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                        {step.description}
                      </p>
                      <Button
                        className='px-3 py-2'
                        onClick={()=>setView("addStore")}
                      >
                        <RiDatabase2Line
                          className="-ml-0.5 size-5 shrink-0"
                          aria-hidden={true}
                        />
                        Create Store
                      </Button>
                    </div>
                  </div>
                </Card>
              ) : (
                <li className="relative p-4">
                  <div className="flex items-start">
                    <RiCheckboxBlankCircleLine
                      className="size-6 shrink-0 text-tremor-content-subtle dark:text-dark-tremor-content-subtle"
                      aria-hidden={true}
                    />
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p className="font-medium leading-5 text-tremor-content-subtle dark:text-dark-tremor-content-subtle">
                        <a href={step.href} className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden={true} />
                          {step.title}
                        </a>
                      </p>
                      <p className="mt-1 text-tremor-default leading-6 text-tremor-content-subtle dark:text-dark-tremor-content-subtle">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
      </>
    );
  }
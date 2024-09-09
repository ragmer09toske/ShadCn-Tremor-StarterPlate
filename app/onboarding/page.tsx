"use client"
import { Card } from '@/components/ui/card';
import { RiCloseLine, RiExternalLinkLine } from '@remixicon/react';
import { useEffect, useState } from "react";
import OnBoarding from './Onboarding';

export default function OnBoardingMain() {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    let timeoutId:any;

    if (!isOpen) {
      timeoutId = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <div className='p-5'>
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
        workspace
      </h1>
      <div className="mt-4 sm:mt-6 lg:mt-10">
      {isOpen && (<>
      <Card className='p-5 relative'>
        <div className="absolute right-0 top-0 pr-3 pt-3">
          <button
            type="button"
            className="rounded-tremor-small p-2 text-tremor-content-subtle hover:bg-tremor-background-subtle hover:text-tremor-content dark:text-dark-tremor-content-subtle hover:dark:bg-dark-tremor-background-subtle hover:dark:text-tremor-content"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
          </button>
        </div>
        <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Welcome to your workspace
        </h3>
        <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
          Start with our step-by-step guide to configure the workspace to your
          needs. For further resources, our video tutorials and
          audience-specific documentations are designed to provide you with a
          in-depth understanding of our platform.
        </p>
        <div className="mt-6 flex items-center space-x-5">
          <button
            type="button"
            className="whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
          >
            Get started
          </button>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-tremor-default font-medium text-tremor-brand dark:text-dark-tremor-brand"
          >
            View tutorials
            <RiExternalLinkLine className="size-4" aria-hidden={true} />
          </a>
        </div>
      </Card>
    </>)}
      <div className="pt-10">
        <OnBoarding />
      </div>
      </div>
    </div>
  )
}

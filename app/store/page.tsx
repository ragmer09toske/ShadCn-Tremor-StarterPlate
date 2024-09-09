'use client';
import { DrawerBody, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/Tremor/Drawer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RiAddFill, RiBarChartFill } from '@remixicon/react';
import { Upload } from 'lucide-react';

export default function Example() {
  return (
    <div className='p-5'>
        <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Total number of your Stores
        </h3>
        <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            0
        </p>
        <div className="mt-4 flex h-52 items-center justify-center rounded-md border border-dashed border-tremor-border p-4 dark:border-dark-tremor-border">
            <div className="text-center">
            <RiBarChartFill
                className="mx-auto h-7 w-7 text-tremor-content-subtle dark:text-dark-tremor-content-subtle"
                aria-hidden={true}
            />
            <p className="mt-2 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                No data available
            </p>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Get started by connecting a database
            </p>
            
            <div className="flex justify-center">
                <DrawerClose>
                <DrawerTrigger asChild>
                <Button
                    variant='secondary'
                    className="mt-6 inline-flex items-center gap-1.5 whitespace-nowrap rounded-tremor-small bg-tremor-brand px-3 py-2 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
                >
                    <RiAddFill className="-ml-1 size-5 shrink-0" aria-hidden={true} />
                    Add database
                </Button>
                </DrawerTrigger>
                <DrawerContent className="sm:max-w-lg">
                    <DrawerHeader>
                    <DrawerTitle>Add Store Details</DrawerTitle>
                    <DrawerDescription className="mt-1 text-sm">
                        Your account has been created successfully. You can now login to
                        your account. For more information, please contact us.
                    </DrawerDescription>
                    </DrawerHeader>
                    <DrawerBody>
                    <Button className="flex w-full h-[150px] items-center justify-center rounded-md border border-dashed">
                        <Upload className="h-4 w-4 " />
                        <span className="sr-only">Upload</span>
                    </Button>
                    </DrawerBody>
                    <DrawerFooter className="mt-6">
                    <DrawerClose asChild>
                        <Button
                        className="mt-2 w-full sm:mt-0 sm:w-fit"
                        variant="secondary"
                        >
                        Go back
                        </Button>
                    </DrawerClose>
                    <DrawerClose asChild>
                        <Button className="w-full sm:w-fit">Ok, got it!</Button>
                    </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
                </DrawerClose>
            </div>
            </div>
        </div>
        </Card>
    </div>
  );
}
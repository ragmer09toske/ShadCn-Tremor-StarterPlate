import { Drawer, DrawerBody, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/Tremor/Drawer'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AddPitcureDrawer = () => {
  return (
  <Drawer>
    <DrawerTrigger asChild>
    <Button size="sm" variant="secondary">Add Product</Button>
    </DrawerTrigger>
    <DrawerContent className="sm:max-w-lg">
      <DrawerHeader>
        <DrawerTitle>Account Created Successfully</DrawerTitle>
        <DrawerDescription className="mt-1 text-sm">
          Your account has been created successfully. You can now login to
        </DrawerDescription>
      </DrawerHeader>
      <DrawerBody>
      <div className="grid gap-2">
        <Image
          alt="Product image"
          className="aspect-square w-full rounded-md object-cover"
          height="300"
          src="/placeholder.svg"
          width="300"
        />
        <div className="grid grid-cols-3 gap-2">
          <button>
            <Image
              alt="Product image"
              className="aspect-square w-full rounded-md object-cover"
              height="84"
              src="/placeholder.svg"
              width="84"
            />
          </button>
          <button>
            <Image
              alt="Product image"
              className="aspect-square w-full rounded-md object-cover"
              height="84"
              src="/placeholder.svg"
              width="84"
            />
          </button>
          <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
            <Upload className="h-4 w-4 text-muted-foreground" />
            <span className="sr-only">Upload</span>
          </button>
        </div>
      </div>
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
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  )
}

export default AddPitcureDrawer;
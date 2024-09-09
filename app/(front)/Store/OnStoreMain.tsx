import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Upload } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import AddPitcureDrawer from './DrawerAddPictures'

const OnStoreMain = () => {
  return (
    <div className='p-5 flex flex-col gap-5'>
      <Card x-chunk="dashboard-07-chunk-2">
        <CardHeader>
          <CardTitle>Product Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="grid gap-3">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger
                  id="category"
                  aria-label="Select category"
                >
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clothing"> Service </SelectItem>
                  <SelectItem value="electronics"> Retail </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="subcategory">
                Subcategory (optional)
              </Label>
              <Select>
                <SelectTrigger
                  id="subcategory"
                  aria-label="Select subcategory"
                >
                  <SelectValue placeholder="Select subcategory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="t-shirts">T-Shirts</SelectItem>
                  <SelectItem value="hoodies">Hoodies</SelectItem>
                  <SelectItem value="sweatshirts">
                    Sweatshirts
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card x-chunk="dashboard-07-chunk-5">
        <CardHeader>
          <CardTitle>Archive Product</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div></div>
            <AddPitcureDrawer />
        </CardContent>
      </Card>
  </div>
  )
}

export default OnStoreMain
import Button from '@/components/ui/button'
import Currency from '@/components/ui/currency'
import useCart from '@/hooks/use-cart'
import React, { useState } from 'react'

const Summary = () => {

    const items = useCart((state) => state.items)

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)

  return (
    <div className='mt-6 bg-gray-100 px-4 py-6 sm:p-6 lg:mt-0 lg:p-8 rounded-lg lg:col-span-5'>
        <h2 className='text-lg font-medium text-gray-900'>
            Order Summary
        </h2>
        <div>
            <div className='flex justify-between items-center border-t border-gray-200 pt-4'>
                <h2 className='text-base font-medium text-gray-500'>
                    Order Total
                </h2>
                <Currency 
                    value={totalPrice}
                />
            </div>
        </div>
        <Button 
            onClick={() => {}}
            className="w-full mt-6"
        >
            Checkout
        </Button>
    </div>
  )
}

export default Summary
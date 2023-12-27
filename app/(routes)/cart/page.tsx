"use client"

import Container from '@/components/ui/container'
import useCart from '@/hooks/use-cart'
import React, { useEffect, useState } from 'react'
import CartItems from './cart-item'
import Summary from './summary'
import NoItemCart from '@/components/ui/no-item-cart'

const CartPage = () => {

    const cart = useCart()

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if(!mounted) {
        return null
    }

  return (
    <div>
        <Container>
            <div>
                <h1 className='text-3xl font-bold text-black'>
                    Shopping Cart
                </h1>
                <div>
                    <div>
                        {cart.items.length === 0 && <NoItemCart />}
                        <ul>
                            {cart.items.map((item) => (
                                <CartItems
                                key={item.id}
                                data={item}
                                />
                                ))}
                        </ul>
                    </div>
                </div>
                <Summary />
            </div>
        </Container>
    </div>
  )
}

export default CartPage
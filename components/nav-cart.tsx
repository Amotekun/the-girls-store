"use client"

import React, { useEffect, useState } from 'react'
import Button from './ui/button'
import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { on } from 'stream'
import useCart from '@/hooks/use-cart'

const NavCart = () => {

    const router = useRouter();
    const cart = useCart();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null;
    };
    
    const onCart = () => {
        router.push(`/cart`)
    }

  return (
    <div className='ml-auto'>
        <Button
            onClick={onCart}
            className='flex'
        >
            <ShoppingBag />
            <span className='ml-2 font-medium'>
                {cart.items.length}
            </span>
        </Button>
    </div>
  )
}

export default NavCart;
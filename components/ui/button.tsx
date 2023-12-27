import { cn } from '@/libs/utils'
import React, { forwardRef } from 'react'

export interface ButtonProps 
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    disabled,
    children,
    type = "button",
    ...props
}, ref) => {
  return (
    <button
        className={cn(`w-auto bg-black border-transparent px-5 py-3 rounded-full disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition`, className)}
        disabled={disabled}
        ref={ref}
        {...props}
    >
        {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button;
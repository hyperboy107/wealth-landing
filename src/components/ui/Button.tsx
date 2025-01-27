// import * as React from "react"
// import { cn } from "@/lib/utils"

// const Button = React.forwardRef<
//   HTMLButtonElement,
//   React.ButtonHTMLAttributes<HTMLButtonElement>
// >(({ className, ...props }, ref) => (
//   <button
//     ref={ref}
//     className={cn(
//       "rounded-lg border bg-primary text-white font-medium py-2 px-4 shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
//       className
//     )}
//     {...props}
//   />
// ))
// Button.displayName = "Button"

// const ButtonIcon = React.forwardRef<
//   HTMLSpanElement,
//   React.HTMLAttributes<HTMLSpanElement>
// >(({ className, ...props }, ref) => (
//   <span
//     ref={ref}
//     className={cn("mr-2", className)}
//     {...props}
//   />
// ))
// ButtonIcon.displayName = "ButtonIcon"

// const ButtonText = React.forwardRef<
//   HTMLSpanElement,
//   React.HTMLAttributes<HTMLSpanElement>
// >(({ className, ...props }, ref) => (
//   <span
//     ref={ref}
//     className={cn("text-base", className)}
//     {...props}
//   />
// ))
// ButtonText.displayName = "ButtonText"

// export { Button, ButtonIcon, ButtonText }


import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "link" }
>(({ variant = "default", className, ...props }, ref) => {
  // Define different styles for the variants
  const variantStyles = {
    default:
      "rounded-lg border bg-primary text-white font-medium py-2 px-4 shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
    link: "text-blue-500 hover:text-blue-700 focus:outline-none",
  }

  return (
    <button
      ref={ref}
      className={cn(variantStyles[variant], className)}
      {...props}
    />
  )
})
Button.displayName = "Button"

const ButtonIcon = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("mr-2", className)}
    {...props}
  />
))
ButtonIcon.displayName = "ButtonIcon"

const ButtonText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("text-base", className)}
    {...props}
  />
))
ButtonText.displayName = "ButtonText"

export { Button, ButtonIcon, ButtonText }

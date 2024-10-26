import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface Props{
    children:ReactNode,
    className?:string
}

export default function AuthTitle({children,className = ''}:Props) {
  return (
    <h1 className={cn("font-semibold text-3xl",className)}>{children}</h1>
  )
}

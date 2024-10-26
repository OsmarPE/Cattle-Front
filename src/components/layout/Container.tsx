import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props{
    className?:string,
    children:ReactNode
}

export default function Container({className = '',children}:Props) {
  return (
    <div className={cn("max-w-[1200px] mx-auto w-[90%]",className)}>
        {children}
    </div>
  )
}

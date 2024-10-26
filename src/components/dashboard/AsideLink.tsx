import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { ReactNode } from "react"
import { NavLink } from "react-router-dom"

interface Props{
    Icon:LucideIcon,
    href:string,
    children:ReactNode
}

export default function AsideLink({Icon, children,href}:Props) {
    

    const classNames = 'inline-flex items-center h-9 px-4 py-2 w-full whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-[#8F8F8F] text-left font-normal gap-2 text-base justify-start hover:bg-white hover:text-muted-black'

    return (
        <NavLink to={href} className={({isActive}) => isActive ? cn(classNames,'bg-white text-black') : classNames }>
            <Icon width={18} />
            {children}
        </NavLink>
    )
}

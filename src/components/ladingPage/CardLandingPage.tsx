import { LucideIcon } from "lucide-react"

interface Props{
    Icon:LucideIcon,
    title:string,
    description:string,
    variant?:'primary' | 'secundary' | 'third'
}

export default function CardLandingPage({Icon,description,title,variant = 'primary'}:Props) {
    if (variant === 'primary') return (
        <article className="p-7 flex-1 rounded-xl bg-primary text-white ">
            <div className="size-12 rounded-full grid place-content-center bg-third text-primary">
                <Icon />
            </div>
            <h3 className="mt-4 mb-2 text-xl font-semibold leading-tight">{title}</h3>
            <p className="text-third">{description}</p>
        </article>
    )
    if (variant === 'secundary') return (
        <article className="p-7 flex-1 rounded-xl bg-third text-primary ">
            <div className="size-12 rounded-full grid place-content-center bg-primary text-white text-primary">
                <Icon />
            </div>
            <h3 className="mt-4 mb-2 text-xl font-semibold leading-tight">{title}</h3>
            <p >{description}</p>
        </article>
    )
    return (
        <article className="p-7 flex-1 rounded-xl bg-white text-primary border border-[#DDDDDD] ">
            <div className="size-12 rounded-full grid place-content-center bg-third text-primary">
                <Icon />
            </div>
            <h3 className="mt-4 mb-2 text-xl font-semibold leading-tight ">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </article>
    )
}

import Perfil from './Perfil'
import { asideLinks } from '@/lib/utils'
import AsideLink from './AsideLink'

export default function Aside() {
    return (
        <aside className="bg-[#F4F4F4] min-h-dvh p-4">
            <nav>
                <span className="inline-block uppercase font-semibold text-gray-400 text-sm mb-2">Perfil</span>
                <Perfil />
                <span className="inline-block uppercase mt-6 font-semibold text-gray-400 text-sm">Dashboard</span>
                <ul className="mt-2 grid ">
                    {asideLinks.map(({ Icon, href, name },i) => (
                        <li key={i}>
                         <AsideLink Icon={Icon} href={href}>{name}</AsideLink>
                        </li>
                    ))
                    }
                </ul>
            </nav>
            
        </aside>
    )
}

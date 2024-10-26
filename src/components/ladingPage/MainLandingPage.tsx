import { ReactNode } from "react"

interface Props{
    children:ReactNode
}

export default function MainLandingPage({children}:Props) {
  return (
    <main>
        {children}
    </main>
  )
}

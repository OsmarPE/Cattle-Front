import { ContextModal } from "@/context/modal"
import { useContext } from "react"

export default function useModal() {

    const context = useContext(ContextModal)

    if (!context) {
        throw new Error('Debe estar dentro de un provider')
    }

    return context
}

import { createContext, ReactNode, useState } from "react";


interface modalType {
    showModal: boolean,
    open: () => void,
    close: () => void,
}


export const ContextModal = createContext<modalType>(null!)


export default function ModalProvider({ children }: { children: ReactNode }) {

    const [showModal, setShowModal] = useState(false)

    const open = () => setShowModal(true)
    const close = () => setShowModal(false)



    return (
        <ContextModal.Provider value={{ showModal, close, open }}>
            {children}
        </ContextModal.Provider>
    )
}



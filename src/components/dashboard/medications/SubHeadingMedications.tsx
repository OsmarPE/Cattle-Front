import { Button } from '@/components/ui/button'
import useModal from '@/hooks/useModal'
import { Plus } from 'lucide-react'

export default function SubHeadingMedications() {
    
    const { open } = useModal()
    
    return (
        <div className="mt-6 mb-3 flex items-center justify-between">
            <h3 className=" text-gray-600 font-medium">Medicamentos</h3>
            <Button onClick={open} size={"sm"} className="gap-1">
                <Plus width={16} />
                Agregar
            </Button>
        </div>
    )
}

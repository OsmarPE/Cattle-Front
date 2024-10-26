import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Form } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { AddHealthType } from '@/lib/utils'
import FormSelect from "@/components/form/FormSelect"
import { SelectItem } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import useModal from "@/hooks/useModal"
import FormTextArea from "@/components/form/FormTextArea"
import { toast } from "sonner"

export default function AddHealth() {

    const { showModal, close } = useModal()

    const form = useForm<z.infer<typeof AddHealthType>>({
        resolver: zodResolver(AddHealthType),
        defaultValues: {
            cattle:'',
            observes:'',
            status:'',
            treatment:''
        }
    })

    const onSubmit = (data: z.infer<typeof AddHealthType>) => {
        const date = new Date().toISOString().split('T')[0]
        data.lastDate = date
        toast.success('Se ha agregado correctamente') 
        close()
        form.reset()      
    }

    return (
        <Dialog open={showModal} onOpenChange={() => {
            form.reset()
            close()

        }}>
            <DialogContent className=" w-[90%] max-w-[580px]">
                <DialogHeader>
                    <DialogTitle>Estado de Salud</DialogTitle>
                    <DialogDescription>
                        Añade el estado de forma detallada del animal
                    </DialogDescription>
                </DialogHeader>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-3">
                              <FormSelect
                                control={form.control}
                                label="Ganado"
                                name="cattle"
                                placeholder="Seleccion el ganado"
                            >
                                <SelectItem value="1">Angus</SelectItem>
                                <SelectItem value="2">Holstein</SelectItem>
                                <SelectItem value="3">Hereford</SelectItem>

                            </FormSelect>
                            <FormSelect
                                control={form.control}
                                label="Estado del Ganado"
                                name="status"
                                placeholder="Seleccion el estado"
                            >
                                <SelectItem value="1">Saludable</SelectItem>
                                <SelectItem value="2">Enfermo</SelectItem>

                            </FormSelect>
                            <FormTextArea
                                control={form.control}
                                label="Observaciones"
                                name="observes"
                                placeholder="Ingrese sus observaciones"
                            />                        
                            <FormTextArea
                                control={form.control}
                                label="Tratamiento"
                                name="treatment"
                                placeholder="Ingrese el tratamiento para el ganado"
                            />                        
                          
                        </div>

                        <Button className="block ml-auto mt-4" type="submit" >Agregar estado de salud</Button>
                    </form>
                </Form >
            </DialogContent>
        </Dialog>

    )
}

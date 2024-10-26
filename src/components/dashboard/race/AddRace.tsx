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
import { AddRaceType } from '@/lib/utils'
import { zodResolver } from "@hookform/resolvers/zod"
import useModal from "@/hooks/useModal"
import FormTextArea from "@/components/form/FormTextArea"
import { toast } from "sonner"
import FormItem from "@/components/form/FormItem"

export default function AddRace() {

    const { showModal, close } = useModal()

    const form = useForm<z.infer<typeof AddRaceType>>({
        resolver: zodResolver(AddRaceType),
        defaultValues: {
            feactures: '',
            name: '',
            origin: '',
            temperature: '',
            type: ''
        }
    })


    const onSubmit = (data: z.infer<typeof AddRaceType>) => {

        console.log(data);

        toast.success('Se ha agregado correctamente')
        // close()
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
                            <FormItem
                                control={form.control}
                                label="Tipo de raza"
                                name="name"
                                placeholder="Ej.Angus"

                            />
                            <FormItem
                                control={form.control}
                                label="Origen de la raza"
                                name="origin"
                                placeholder="Ej.Suiza"

                            />
                            <FormItem
                                control={form.control}
                                label="Clima"
                                name="temperature"
                                placeholder="Ej.Clima templado"
                            />
                            <FormItem
                                control={form.control}
                                label="Produccion"
                                name="type"
                                placeholder="Ej.Alta producción de leche"
                            />
                            <FormTextArea
                                control={form.control}
                                label="Descripción"
                                name="feactures"
                                placeholder="Ej.Excelente marmoleo, adaptable"
                            />
                        </div>

                        <Button className="block ml-auto mt-4" type="submit" >Agregar estado de salud</Button>
                    </form>
                </Form >
            </DialogContent>
        </Dialog>

    )
}

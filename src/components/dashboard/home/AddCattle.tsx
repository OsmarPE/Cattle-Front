import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Form } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { AddCattleType } from '@/lib/utils'
import FormItem from "@/components/form/FormItem"
import FormSelect from "@/components/form/FormSelect"
import { SelectItem } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import FormDate from "@/components/form/FormDate"
import useModal from "@/hooks/useModal"

export default function AddCattle() {

    const { showModal, close } = useModal()

    const form = useForm<z.infer<typeof AddCattleType>>({
        resolver: zodResolver(AddCattleType),
        defaultValues: {
            date: undefined,
            genero: '',
            race: '',
            weight: ''
        }
    })

    const onSubmit = (data: z.infer<typeof AddCattleType>) => {
        console.log(data);

    }

    return (
        <Dialog open={showModal} onOpenChange={() => {
            form.reset()
            close()

        }}>
            <DialogContent className=" w-[90%] max-w-[580px]">
                <DialogHeader>
                    <DialogTitle>Agregar animal</DialogTitle>
                    <DialogDescription>
                        Añade las caracteristicas del animal
                    </DialogDescription>
                </DialogHeader>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-3">
                              <FormSelect
                                control={form.control}
                                label="Raza"
                                name="race"
                                placeholder="Seleccion la raza"
                            >
                                <SelectItem value="1">Angus</SelectItem>
                                <SelectItem value="2">Holstein</SelectItem>
                                <SelectItem value="2">Hereford</SelectItem>

                            </FormSelect>
                            <FormSelect
                                control={form.control}
                                label="Genero"
                                name="genero"
                                placeholder="Seleccion el genero del ganado"
                            >
                                <SelectItem value="1">Macho</SelectItem>
                                <SelectItem value="2">Hembra</SelectItem>

                            </FormSelect>
                            <FormItem
                                control={form.control}
                                label="Peso del ganado"
                                name="weight"
                                type="number"
                                placeholder="ingrese el peso"
                            />
                            <FormDate
                                control={form.control}
                                label="Fecha de Nacimiento"
                                name="date"
                                placeholder="Ingrese una fecha de nacimiento"
                            />

                        </div>

                        <Button className="block ml-auto mt-4" type="submit" >Agregar ganado</Button>
                    </form>
                </Form >
            </DialogContent>
        </Dialog>

    )
}

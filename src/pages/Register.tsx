import { Button } from "@/components/ui/button"
import {
    Form
} from "@/components/ui/form"
import { validateRegister } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"
import FormItem from '@/components/form/FormItem'
import AuthText from "@/components/auth/AuthText"
import AuthTitle from "@/components/auth/AuthTitle"


export default function Register() {

    const form = useForm<z.infer<typeof validateRegister>>({
        resolver: zodResolver(validateRegister),
        defaultValues:{
            email:'',
            password:'',
            confirmPassword:''
        }
    })


    const onSubmit = (data: z.infer<typeof validateRegister>) => {
        console.log(data);

    }

    return (
        <div className="w-full">
            <AuthTitle>Crea Una Cuenta</AuthTitle>
            <AuthText className="text-left mb-6" text="Ya tienes una cuenta?" textLink="Inicia sesión ahora" href="/auth"/>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-3">
                        <FormItem
                            control={form.control}
                            label="Correo Electronico"
                            name="email"
                            placeholder="exemple@gmail.com"
                            type="text"
                        />
                        <FormItem
                            control={form.control}
                            label="Contraseña"
                            name="password"
                            placeholder="Contraseña nueva"
                            type="text"
                        />
                        <FormItem
                            control={form.control}
                            label="Confirmar contraseña"
                            name="confirmPassword"
                            placeholder="Ingrese nuevamente la contraseña"
                            type="text"
                        />

                    </div>
                    <Button className="mt-8 w-full h-12" type="submit" size={'lg'}>Crear Cuenta</Button>
               </form>
            </Form>
        </div>
    )
}
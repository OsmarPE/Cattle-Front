import { Button } from "@/components/ui/button"
import {
    Form
} from "@/components/ui/form"
import { validateRegister } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { z } from "zod"
import FormItem from '@/components/form/FormItem'
import AuthText from "@/components/auth/AuthText"
import AuthTitle from "@/components/auth/AuthTitle"
import { createAccount } from "@/services/user.service"
import { toast } from "sonner"
import  { AxiosError } from 'axios'

export default function Register() {

    const nav = useNavigate()

    const form = useForm<z.infer<typeof validateRegister>>({
        resolver: zodResolver(validateRegister),
        defaultValues:{
            name:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    })


    const onSubmit = async(data: z.infer<typeof validateRegister>) => {
        const { status, message } = await createAccount(data)

        if(status === 'success'){
            toast.success(message)
        }else{
            toast.error(message)
        }

        nav('/auth',{replace:true})
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
                            label="Usuario"
                            name="name"
                            placeholder="Ej. Juan Pablo"
                            type="text"
                        />
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

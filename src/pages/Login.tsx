import { Button } from "@/components/ui/button"
import {
    Form
} from "@/components/ui/form"
import { validateLogin } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { z } from "zod"
import FormItem from '@/components/form/FormItem'
import AuthText from "@/components/auth/AuthText"
import AuthTitle from "@/components/auth/AuthTitle"
import { LoginUser } from "@/services/user.service"
import { toast } from "sonner"


export default function Login() {

    const nav = useNavigate()

    const form = useForm<z.infer<typeof validateLogin>>({
        resolver: zodResolver(validateLogin),
        defaultValues:{
            email:'',
            password:''
        }
    })


    const onSubmit = async(data: z.infer<typeof validateLogin>) => {
        const { status, message } = await LoginUser(data)
        if(status === 'success'){
            toast.success(message)
        }else{
            toast.error(message)
        }
        nav('/dashboard', {replace:true})   

    }

    return (
        <div className="w-full">
            <AuthTitle>Iniciar Sesión</AuthTitle>
            <p className="text-gray-400 mb-6 text-sm">Bienvenido a nuestra plataforma</p>
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
                            placeholder="Contraseña"
                            type="text"
                        />

                    </div>
                    <Link to={'/auth/forget'} className="block  mt-2 text-right text-sm text-primary hover:underline">Olvidaste tu Contraseña?</Link>
                    <Button className="mt-8 w-full h-12" type="submit" size={'lg'}>Iniciar Sesión</Button>
                    <AuthText className="mt-4" text="Aun no tienes una cuenta?" textLink="Registrate aqui" href="/auth/register"/>
                </form>
            </Form>
        </div>
    )
}

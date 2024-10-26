import { Button } from "@/components/ui/button"
import {
    Form
} from "@/components/ui/form"
import { validateForgetPassword } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import FormItem from '@/components/form/FormItem'
import AuthText from "@/components/auth/AuthText"
import AuthTitle from "@/components/auth/AuthTitle"


export default function ForgetPassword() {

    const form = useForm<z.infer<typeof validateForgetPassword>>({
        resolver: zodResolver(validateForgetPassword),
        defaultValues:{
            email:''
        }
    })


    const onSubmit = (data: z.infer<typeof validateForgetPassword>) => {
        console.log(data);

    }

    return (
        <div className="w-full">
            <AuthTitle>Restablecer Contraseña</AuthTitle>
            <p className="text-sm  text-gray-400 mb-6">Ingrese su correo y te enviaremos un link para restablecer tu contraseña</p>
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
                    </div>
                    <Button className="mt-8 w-full h-12" type="submit" size={'lg'}>Enviar correo de recuperación</Button>
                    <AuthText className="mt-4" text="Ya tienes una cuenta?" textLink="Inicia sesión ahora" href="/auth"/>
                </form>
            </Form>
        </div>
    )
}

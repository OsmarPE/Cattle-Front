import { Button } from "@/components/ui/button"
import {
    Form
} from "@/components/ui/form"
import { resetPassword } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import FormItem from '@/components/form/FormItem'
import AuthText from "@/components/auth/AuthText"
import AuthTitle from "@/components/auth/AuthTitle"


export default function ResetPassword() {

    const form = useForm<z.infer<typeof resetPassword>>({
        resolver: zodResolver(resetPassword),
        defaultValues:{
            password:'',
            confirmPassword:''
        }
    })


    const onSubmit = (data: z.infer<typeof resetPassword>) => {
        console.log(data);

    }

    return (
        <div className="w-full">
            <AuthTitle>Nueva Contraseña</AuthTitle>
            <p className="text-sm  text-gray-400 mb-6">Ingrese su nueva contraseña</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-3">
                        <FormItem
                            control={form.control}
                            label="Contraseña"
                            name="password"
                            placeholder="Nueva contraseña"
                            type="text"
                        />
                        <FormItem
                            control={form.control}
                            label="Nueva contraseña"
                            name="confirmPassword"
                            placeholder="Repita la contraseña"
                            type="text"
                        />
                    </div>
                    <Button className="mt-8 w-full h-12" type="submit" size={'lg'}>Restablecer la contraseña</Button>
                    <AuthText className="mt-4" text="Ya tienes una cuenta?" textLink="Inicia sesión ahora" href="/auth"/>
                </form>
            </Form>
        </div>
    )
}

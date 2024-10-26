import { Button } from "@/components/ui/button"
import {
    Form
} from "@/components/ui/form"
import { confirmAccount } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import AuthText from "@/components/auth/AuthText"
import AuthTitle from "@/components/auth/AuthTitle"
import FormInputOTP from "@/components/form/FormInputOTP"


export default function ConfirmAccount() {

    const form = useForm<z.infer<typeof confirmAccount>>({
        resolver: zodResolver(confirmAccount),
        defaultValues:{
            code:''
        }
    })


    const onSubmit = (data: z.infer<typeof confirmAccount>) => {
        console.log(data);

    }

    return (
        <div className="w-full">
            <AuthTitle>Confirmar Cuenta</AuthTitle>
            <p className="text-sm  text-gray-400 mb-6">Ingresa el codigo que recibiste en su correo electronico</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormInputOTP control={form.control} label="Codigo" name="code" />
                    <Button className="mt-8 w-full h-12" type="submit" size={'lg'}>Confirmar cuenta</Button>
                    <AuthText className="mt-4" text="Ya tienes una cuenta?" textLink="Inicia sesión ahora" href="/auth"/>
                </form>
            </Form>
        </div>
    )
}
import { clsx, type ClassValue } from "clsx"
import { Egg, Heart, House, LucideIcon, ShieldPlus, Target } from "lucide-react"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface asideLinksType{
  Icon:LucideIcon,
  href:string,
  name:string
}

export const formatDate = (dateText:string) => {
  const date = new Date(dateText)
  const formatter = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});
return formatter.format(date)
}

export const asideLinks:asideLinksType[] = [
  {
    href:'/dashboard/home',
    Icon:House,
    name:'Inicio'
  },
  {
    href:'/dashboard/health',
    Icon:Heart,
    name:'Salud'
  },
  {
    href:'/dashboard/race',
    Icon:Egg,
    name:'Raza' 
  },
  {
    href:'/',
    Icon:Target,
    name:'Productos'
  },
]

// AUTENTICATION

export const validateLogin = z.object({
  email:z.string({message:'Ingrese un correo electronico'}).email({message:'Ingrese un correo electronico valido'}),
  password:z.string({message:'Ingrese una contraseña'}).min(8,{message:'La contraseña debe ser minimo 8 caracteres'})
})

export const validateRegister = z.object({
  name:z.string({message:'Ingrese un nombre'}).min(5,{message:'El nombre debe tener al menos 5 caracteres'}),
  email:z.string({message:'Ingrese un correo electronico'}).email({message:'Ingrese un correo electronico valido'}),
  password:z.string({message:'Ingrese una contraseña'}).min(8,{message:'La contraseña debe ser minimo 8 caracteres'}),
  confirmPassword:z.string({message:'Ingrese nuevamente la contraseña'})
}).refine((datos) => datos.password === datos.confirmPassword ,{
  message:'La contraseña deben ser igual',
  path:['confirmPassword']
})

export const validateForgetPassword = z.object({
  email: z.string({message:'Ingrese un correo electronico'}).email({message:'ingrese un correo electronico valido'})
})

export const confirmAccount = z.object({
  code:z.string({message:'Ingrese el codigo de 6 digitos'}).length(6,{message:'Ingrese el codigo de 6 digitos'}).refine((item) =>  Number(item) )
})

export const resetPassword = z.object({
  password:z.string({message:'Ingrese una contraseña'}).min(8,{message:'La contraseña debe ser minimo 8 caracteres'}),
  confirmPassword:z.string({message:'Ingrese nuevamente la contraseña'})
})

//CATTLE

export const AddCattleType = z.object({
  race:z.string().min(1,{message:'Selecciones una raza'}) ,
  weight:z.string().min(1,{message:'Ingrese el peso del ganado'}).refine(value => Number(value)),
  genero:z.string().min(1,{message:"seleccione un genero"}),
  date:z.date({message:'Ingrese una fecha'}),
})


export const AddHealthType = z.object({
  cattle:z.string().min(1,{message:'Selecciones el ganado'}),
  status:z.string().min(1,{message:'Ingrese un estado'}),
  observes:z.string().min(1,{message:'Ingrese sus observaciones'}),
  treatment:z.string().min(1,{message:'Ingrese el tratamientos correspondiente'}),
  lastDate:z.string().min(1,{message:'Ingrese la ultima fecha de tratamiento'}).optional(),
})

export const AddRaceType = z.object({
  name:z.string().min(1,{message:'Ingrese el tipo de raza'}),
  origin:z.string().min(1,{message:'Ingrese el origen de donde es la raza'}),
  type:z.string().min(1,{message:'Ingrese el tipo de carne'}),
  temperature:z.string().min(1,{message:'Ingrese la temperatura'}),
  feactures:z.string().min(1,{message:'Ingrese una descripción'}),
})
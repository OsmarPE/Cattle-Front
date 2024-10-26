import { Control } from "react-hook-form";
import { FormControl, FormField, FormLabel, FormMessage, FormItem as FormItemUI } from "../ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { ReactNode } from "react";

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>,
    placeholder: string,
    name: string,
    label: string,
    children:ReactNode
   
}

export default function FormSelect({ control, label, name, placeholder, children }: Props) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItemUI>
                    <FormLabel>{label}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                         {children}
                            
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItemUI>
            )}
        />
    )
}

import { Control} from "react-hook-form";
import { FormControl, FormField, FormLabel, FormMessage, FormItem as FormItemUI } from "../ui/form";
import { Input } from "../ui/input";

interface Props{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control:Control<any>,
    placeholder:string,
    name:string,
    label:string
    type?:React.HTMLInputTypeAttribute
}

export default function FormItem({control,label,name,placeholder,type = 'text'}:Props) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItemUI>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder} type={type} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItemUI>
            )}
        />
    )
}

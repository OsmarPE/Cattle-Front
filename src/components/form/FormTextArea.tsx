import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Textarea } from '../ui/textarea'
import { Control } from 'react-hook-form'

interface Props{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control:Control<any>,
    placeholder:string,
    name:string,
    label:string
}
export default function FormTextArea({control,label,name,placeholder}:Props) {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Textarea
            placeholder={placeholder}
            className="resize-none"
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
  )
}

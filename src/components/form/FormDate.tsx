import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { FormControl, FormField, FormLabel, FormMessage } from "../ui/form"
import {FormItem} from "@/components/ui/form"
import { CalendarIcon } from "lucide-react"
import { Button } from "../ui/button"
import { format } from "date-fns"
import { Control } from "react-hook-form"

interface Props{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control:Control<any>,
    placeholder:string,
    name:string,
    label:string
}


export default function FormDate({control,label,name,placeholder}:Props) {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="">
        <FormLabel>{label}</FormLabel>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full pl-3 text-left justify-start font-normal",
                  !field.value && "text-muted-foreground"
                )}
              >
                 <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                {field.value ? (
                  format(field.value, "PPP")
                ) : (
                  <span>{placeholder}</span>
                )}
               
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <FormMessage />
      </FormItem>
    )}
    />
  )
}

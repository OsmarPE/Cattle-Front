import { Control } from "react-hook-form";
import { FormControl, FormField, FormLabel, FormMessage, FormItem } from "../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "../ui/input-otp";

interface Props{
    control:Control<any>,
    label:string,
    name:string
    maxLenght?:number
}

export default function FormInputOTP({control,label,maxLenght = 6,name}:Props) {


  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <InputOTP maxLength={maxLenght} {...field}>
            <InputOTPGroup >
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator  />
            <InputOTPGroup >
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
  )
}

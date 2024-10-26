import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Props{
    text:string,
    textLink:string,
    href:string,
    className?:string
}

export default function AuthText({href,text,textLink,className = ''}:Props) {
  return (
    <p className={cn("text-sm text-gray-400 text-center",className)}>{text} <Link to={href} className="text-primary hover:underline"> {textLink}</Link> </p>
  )
}

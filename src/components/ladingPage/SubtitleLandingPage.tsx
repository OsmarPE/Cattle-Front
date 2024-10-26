import { cn } from "@/lib/utils";

interface Props {
    className?: string,
    firstText:string,
    secondText?:string
}

export default function SubtitleLandingPage({ className = '',firstText,secondText }: Props) {
    return (
        <h2 className={cn("text-balance font-semibold text-5xl", className)}>
            {firstText}
            {secondText && <span className="block text-primary">
                {secondText}
            </span>}
        </h2>

    )
}

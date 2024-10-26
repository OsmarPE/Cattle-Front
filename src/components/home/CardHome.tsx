import { Card, CardFooter, CardHeader } from "../ui/card";

interface Props {
    text: string,
    number: number,
    value?: number
}

export default function CardHome({ number, text, value = 0 }: Props) {
    return (
        <Card>
            <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                    <h4 className="text-sm text-gray-500">{text}</h4>
                    {value !== 0 && (
                        <span className="text-[8px] text-green-500 inline-flex gap-1 items-center">
                            <span>▲</span>
                            <span className="text-xs font-medium ">14</span>
                        </span>
                    )}
                </div>
            </CardHeader>
            <CardFooter>
                <span className="font-bold text-3xl">{number}</span>
            </CardFooter>
        </Card>
    )
}

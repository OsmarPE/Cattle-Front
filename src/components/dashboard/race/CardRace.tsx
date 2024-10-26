import { Button } from "@/components/ui/button";
import { RaceType } from "@/types";
import { Pencil, Trash } from "lucide-react";

interface Props{
    race:RaceType
}

export default function CardRace({race}:Props) {

    const { feactures, origin,name,temperature,type } = race

  return (
    <article className=" p-4 rounded-lg bg-gray-100">
    <div className="pb-4 border-dotted border-b-4 border-gray-200 flex justify-between">
      <div>
        <h4 className="text-lg font-bold text-gray-600">{name}</h4>
        <p className="text-sm italic">{origin}</p>
      </div>
      <div className="space-x-2">
        <Button size={'icon'} variant={'outline'}>
            <Trash width={16}/>
        </Button>
        <Button size={'icon'} variant={'outline'}>
            <Pencil width={16}/>
        </Button>
      </div>
    </div>
    <div className="pt-4">
        <ul className="grid p-4 bg-white rounded-md gap-5">
          <li>
            <span className="font-medium">Descripcion</span>
            <p className="text-gray-400">{feactures}</p>    
          </li>
          <li>
            <span className="font-medium">Clima</span>
            <p className="text-gray-400">{temperature}</p>    
          </li>
          <li>
            <span className="font-medium">Tipo de carne</span>
            <p className="text-gray-400">{type}</p>    
          </li>
        </ul>
    </div>
  </article>
  )
}

import { Button } from "@/components/ui/button";
import useModal from "@/hooks/useModal";
import { Plus } from "lucide-react";

export default function HeadingRace() {

  const { open } = useModal()

  return (
    <div className="flex gap-4 justify-between ">
        <div>
          <h1 className="text-2xl font-semibold text-muted-black">Raza</h1>
          <p className="text-gray-400 text-sm">Visualización de las razas del ganado</p>
        </div>
        <Button onClick={open} variant={'secondary'}> <Plus width={16}/> Agregar</Button>
      </div>
  )
}

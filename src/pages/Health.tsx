import AddHealth from "@/components/dashboard/health/AddHealth";
import { TableHealth } from "@/components/dashboard/health/TableHealth";
import SubHeadingMedications from "@/components/dashboard/medications/SubHeadingMedications";
import CardHome from "@/components/home/CardHome";
import ModalProvider from "@/context/modal";

export default function Health() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold text-muted-black">Salud</h1>
            <p className="text-gray-400 text-sm">Muestra el estado del ganado y las ultimas observaciones</p>


            <div className="mt-4 grid grid-cols-3 gap-4">
                <CardHome text="Total de medicamentos" number={12} />
                <CardHome text="Numero de animales enfermos" number={12} />
                <CardHome text="Total de animales" number={12} />
            </div>
            
            <ModalProvider>
                <SubHeadingMedications />
                <AddHealth/>
            </ModalProvider>

            <TableHealth/>
        </div>
    )
}

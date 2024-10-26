import SubHeadingMedications from "@/components/dashboard/medications/SubHeadingMedications";
import { TableMedications } from "@/components/dashboard/medications/TableMedications";
import CardHome from "@/components/home/CardHome";
import ModalProvider from "@/context/modal";

export default function Medications() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold text-muted-black">Medicamentos</h1>
            <p className="text-gray-400 text-sm">Visualizacion de los medicamentos de cada uno de los animales </p>


            <div className="mt-4 grid grid-cols-3 gap-4">
                <CardHome text="Total de medicamentos" number={12} />
                <CardHome text="Numero de animales enfermos" number={12} />
                <CardHome text="Total de animales" number={12} />
            </div>
            
            <ModalProvider>
                <SubHeadingMedications />
            </ModalProvider>

            <TableMedications />
        </div>
    )
}

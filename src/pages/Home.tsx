import AddCattle from "@/components/dashboard/home/AddCattle";
import SubHeadingCattle from "@/components/dashboard/home/SubHeadingCattle";
import { TableComponent } from "@/components/dashboard/home/TableComponent";
import CardHome from "@/components/home/CardHome";
import ModalProvider from "@/context/modal";

export default function Home() {


  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-muted-black">Inicio</h1>
      <p className="text-gray-400 text-sm">Monitorea todos tus animales aqui </p>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <CardHome text="Total de animales" number={12} />
        <CardHome text="Total de animales" number={12} />
        <CardHome text="Total de animales" number={12} />
      </div>
      <ModalProvider>
        <SubHeadingCattle />
        <AddCattle />
      </ModalProvider>
      <TableComponent />
    </div>
  )
}

import AddRace from "@/components/dashboard/race/AddRace";
import CardRace from "@/components/dashboard/race/CardRace";
import HeadingRace from "@/components/dashboard/race/HeadingRace";
import ModalProvider from "@/context/modal";
export default function Race() {

  
  return (
    <div className="p-6">
      <ModalProvider>
        <HeadingRace/>
        <AddRace/>
      </ModalProvider>
      <div className="mt-8 grid gap-4 grid-cols-3">
        <CardRace
          race={{
            _id:'',
            catte:'',
            feactures:'Excelente marmoleo, adaptable',
            name:'Angust',
            origin:'Escocia',
            temperature:'Clima templado',
            type:'Carne de alta calidad'
          }}
        />
        <CardRace
          race={{
            _id:'',
            catte:'',
            feactures:'Excelente marmoleo, adaptable',
            name:'Angust',
            origin:'Escocia',
            temperature:'Clima templado',
            type:'Carne de alta calidad'
          }}
        />
        <CardRace
          race={{
            _id:'',
            catte:'',
            feactures:'Excelente marmoleo, adaptable',
            name:'Angust',
            origin:'Escocia',
            temperature:'Clima templado',
            type:'Carne de alta calidad'
          }}
        />
    

      </div>
    </div>
  )
}

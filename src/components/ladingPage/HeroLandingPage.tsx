import Container from "../layout/Container"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

export default function HeroLandingPage() {
  return (
    <section className="py-28 relative">
        <Container className="text-center">
            
            <div className=" w-max mx-auto flex items-center gap-2 py-1 px-2 mb-4 bg-white rounded-2xl border border-primary/50">
                <Badge variant={'gradient'}>New</Badge>
                <span className="text-sm pr-1 font-medium">Revoluciona tu Producción</span>
            </div>
            <h1 className="text-6xl font-bold max-w-[800px] mx-auto">Gestión Ganadera Eficiente: <span className="text-primary">Tu Aliado en el Campo</span> </h1>
            <p className="text-lg max-w-3xl mt-5 mb-7 mx-auto text-gray-400">Optimiza tu ganadería y facilita la gestión de razas, alimentación y salud animal. Toma decisiones informadas y promueve prácticas sostenibles para maximizar la productividad y el bienestar.</p>
            <Button  size={"lg"} variant={'gradient'} >Empezar a usarlo</Button>
        </Container>
        
    </section>
  )
}

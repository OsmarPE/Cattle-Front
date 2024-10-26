import { Settings } from "lucide-react";
import Container from "../layout/Container";
import SubtitleLandingPage from "./SubtitleLandingPage";
import CardLandingPage from "./CardLandingPage";

export default function ServicesLandingPage() {
  return (
    <section className="pt-32 pb-20">
        <Container>
            <SubtitleLandingPage firstText="Descubre Nuestras" secondText="Funciones Clave"/>
            <div className="flex gap-6 mt-10">
            
                <CardLandingPage
                    Icon={Settings}
                    title="Gestión de Animales"
                    description="Registro y seguimiento de diferentes razas de ganado, incluyendo datos sobre salud, producción y reproducción."
                />
                <CardLandingPage
                    Icon={Settings}
                    title="Accecibilidad"
                    description="Plataforma fácil de usar que permite a los usuarios gestionar la información de manera eficiente, sin necesidad de conocimientos técnicos avanzados."
                    variant="secundary"
                />
              
                <CardLandingPage
                    Icon={Settings}
                    title="Control deAlimentos y Medicamentos"
                    description="Registro y seguimiento de diferentes razas de ganado, incluyendo datos sobre salud, producción y reproducción."
                    variant="third"
                />
              
               
            </div>
        </Container>
    </section>
  )
}

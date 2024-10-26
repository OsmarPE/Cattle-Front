import Container from "../layout/Container";
import SubtitleLandingPage from "./SubtitleLandingPage";

export default function StatisticsLandingPage() {
  return (
    <section className="py-20">
        <Container className="text-center">
            <SubtitleLandingPage firstText="Más Tecnologia" secondText="Más Compromiso"/>
            <p className="text-gray-400 text-balance mt-2">Unete a nuestra plataforma para seguir creciendo con nosotros</p>
        </Container>
        <div className="h-[300px] relative mt-8 bg-cover bg-no-repeat bg-center" style={{backgroundImage:'url(/cattleSta.png)'}}>
            <div className="p-16 rounded-xl absolute bottom-0 translate-y-1/2 w-max mx-auto flex items-center gap-14 left-0 right-0 text-white bg-primary">
                <div className="grid gap-2 text-center">
                    <span className="font-bold text-6xl">15%</span>
                    <p className="text-xl">Eficiencia en la Producción</p>
                </div>
                <div className="grid gap-2 text-center">
                    <span className="font-bold text-6xl">25%</span>
                    <p className="text-xl">Eficiencia en la Producción</p>
                </div>
                <div className="grid gap-2 text-center">
                    <span className="font-bold text-6xl">10%</span>
                    <p className="text-xl">Eficiencia en la Producción</p>
                </div>
            </div>
        </div>
    </section>
  )
}

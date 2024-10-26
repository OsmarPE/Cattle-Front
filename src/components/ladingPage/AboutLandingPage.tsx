import Container from "../layout/Container";
import SubtitleLandingPage from "./SubtitleLandingPage";

export default function AboutLandingPage() {
  return (
    <section className="pt-20 pb-48">
        <Container>
            <SubtitleLandingPage firstText="Pasión por la " secondText="Ganaderia Sostenible" className="text-right"/>
            <div className="relative mt-14">
                <img src="/about.png" alt="ganaderia  subiendo una montaña" />
                <div className="absolute  bottom-0 translate-y-1/4 h-max right-0 left-1/4 p-12 bg-primary text-third rounded-xl ">
                    <img src="/quote.svg" alt="" />
                    <p className="text-2xl mt-6">En Cattle SO, nos apasiona transformar la ganadería moderna a través de soluciones innovadoras que combinan eficiencia, sostenibilidad y accesibilidad, empoderando a los productores para tomar decisiones informadas y responsables.</p>
                </div>
            </div>
            
        </Container>
    </section>
  )
}

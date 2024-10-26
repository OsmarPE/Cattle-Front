import AboutLandingPage from "@/components/ladingPage/AboutLandingPage";
import GridBackground from "@/components/ladingPage/GridBackground";
import HeaderLandingPage from "@/components/ladingPage/HeaderLandingPage";
import HeroLandingPage from "@/components/ladingPage/HeroLandingPage";
import MainLandingPage from "@/components/ladingPage/MainLandingPage";
import ServicesLandingPage from "@/components/ladingPage/ServicesLandingPage";
import StatisticsLandingPage from "@/components/ladingPage/StatisticsLandingPage";

export default function LandingPage() {
    return (
        <div>
            <HeaderLandingPage/>
            <MainLandingPage>
                <HeroLandingPage/>
                <GridBackground />
                <StatisticsLandingPage/>
                <ServicesLandingPage/>
                <AboutLandingPage/>
            </MainLandingPage>
        </div>
    )
}

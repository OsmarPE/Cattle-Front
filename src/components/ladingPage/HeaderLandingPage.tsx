import { Link } from "react-router-dom";
import Container from "../layout/Container";
import { Button } from "../ui/button";

export default function HeaderLandingPage() {
    return (
        <header className="">
            <Container className="h-20 flex items-center justify-between">
                <div className="flex gap-6 items-center">
                    <Link to={'/'} className="uppercase tracking-[2px] text-sm">
                        Cattle cd
                    </Link>
                    <div className="flex items-center gap-2">
                        <Button asChild variant={'ghost'} className="text-base">
                            <Link to={'/'}>
                                Servicios
                            </Link>
                        </Button>
                        <Button asChild variant={'ghost'} className="text-base">
                            <Link to={'/'}>
                                Sobre Nosotros
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Button asChild variant={'outline'}>
                        <Link to={'/auth/register'}>
                            Registrarse
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link to={'/auth'}>
                            Iniciar Sesion
                        </Link>
                    </Button>
                </div>
            </Container>
        </header>
    )
}

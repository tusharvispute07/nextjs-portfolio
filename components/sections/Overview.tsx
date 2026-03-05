import Container from "../ui/container";
import About from "./overview/About";
import Experience from "./overview/Experience";
import Hero from "./overview/Hero";
import TechStack from "./overview/TechStack";

export default function Overview() {
    return (
        <div className="w-full">
            <Container>
                <Hero />
                <About />
                <TechStack />
                <Experience />
            </Container>
        </div>
    )
}
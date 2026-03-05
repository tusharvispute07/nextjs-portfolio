import Container from "../ui/container";
import Hero from "./overview/Hero";

export default function Overview() {
    return (
        <div className="w-full">
            <Container>
                <Hero />
            </Container>
        </div>
    )
}
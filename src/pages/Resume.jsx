import Nav from "../components/Nav";
import HexagonBackground from "../components/HexagonBackground";
import 'animate.css';
import ScrollAnimation from "react-animate-on-scroll";

function Resume() {
    return (
        <>
            <Nav color='lightskyblue'/>
            <HexagonBackground image='hexagons/hexagon_resume.svg'/>
        </>
    )
}

export default Resume;
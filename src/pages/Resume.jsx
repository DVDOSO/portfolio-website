import Nav from "../components/Nav";
import HexagonBackground from "../components/HexagonBackground";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";

function Resume() {
    const [isLoading, setIsLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading && <Loading color="lightskyblue" />}
            {loaded && (
                <>
                    <Nav color="lightskyblue" />
                    <HexagonBackground image="hexagons/hexagon_resume.svg" />
                </>
            )}
        </>
    );
}

export default Resume;

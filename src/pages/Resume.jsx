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
                    <HexagonBackground image="hexagons/hexagon_resume.svg" opacity={1} fixed='true' />

                    <div className="background"/>
                    <div className="container resume">
                        <Nav color="lightskyblue" />
                        <section className="hero resume">
                            <article className="mainCaption">
                                <h1 className="mainTitle">
                                    <b id="headerBold">
                                        My Resume<span id="accent1">.</span>
                                    </b>
                                </h1>
                                <p className="caption resume">
                                    I have a very goo resume please hire me lol.
                                </p>
                            </article>
                            <p className="scroll">Scroll ▼</p>
                        </section>
                    </div>
                </>
            )}
        </>
    );
}

export default Resume;

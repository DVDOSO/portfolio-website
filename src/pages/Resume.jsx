import Nav from "../components/Nav";
import HexagonBackground from "../components/HexagonBackground";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import ResumeContent from "../components/ResumeContent";
import "animate.css";
import Contact from "../components/Contact";

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
                                Throughout my life, I have developed a wide range of skills, and I am constantly learning and using new ones. Explore my resume to learn more about my journey and achievements.
                                </p>
                            </article>
                            <p className="scroll">Scroll ▼</p>
                        </section>
                        <div id="centerHorizontal"><a href="David_Jiang_Resume.pdf" className="resumeDownload" download>Download my Resume!</a></div>
                        <ResumeContent />
                        <Contact color="lightskyblue"/>
                    </div>
                </>
            )}
        </>
    );
}

export default Resume;

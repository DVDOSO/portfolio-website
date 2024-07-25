import Nav from "../components/Nav";
import SocialButton from "../components/SocialButton";
import Section from "../components/Section";
import Contact from "../components/Contact";
import HomeProject from "../components/HomeProject";
import "./styles.css";
import HexagonBackground from "../components/HexagonBackground";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

function Home() {
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
            {isLoading && <Loading color="darkmagenta" />}
            {loaded && (
                <>
                    <HexagonBackground
                        image="hexagons/hexagon_home.svg"
                        opacity={0.8}
                    />
                    <div className="background" />
                    <div className="container home">
                        <Nav color="darkmagenta" />

                        <section className="hero">
                            <article className="mainCaption">
                                <h1 className="mainTitle">
                                    Hello, my <span id="nowrap">name is</span>{" "}
                                    <br />{" "}
                                    <b id="headerBold">
                                        David Jiang<span id="accent1">.</span>
                                    </b>
                                </h1>
                                <p className="caption">
                                    I&apos;m a{" "}
                                    <b id="darkcolor2">software developer</b>{" "}
                                    and a{" "}
                                    <b id="darkcolor2">computer science</b>{" "}
                                    student at the{" "}
                                    <b id="darkcolor2">
                                        University of Waterloo, Canada
                                    </b>
                                    .
                                </p>
                                <section className="socials">
                                    <SocialButton
                                        name="GitHub"
                                        address="https://github.com/DVDOSO"
                                        icon="github-mark.svg"
                                        width={50}
                                    />
                                    <SocialButton
                                        name="LinkedIn"
                                        address="https://www.linkedin.com/in/david-jiang-187b86181/"
                                        icon="icons8-linkedin.svg"
                                        width={50}
                                    />
                                </section>
                            </article>
                            <img
                                className="avatar"
                                src="avatar.png"
                                alt="avatar"
                                width={450}
                            />
                        <p className="scroll">Scroll ▼</p>
                        </section>

                        <section className="sections">
                            <ScrollAnimation animateIn="animate__animated animate__bounceIn">
                                <Section
                                    imgPath="laptop_2490636.png"
                                    order="right"
                                    color="darkmagenta"
                                    title="About Me."
                                    text="As a software developer who creates user-friendly products, I am known for focusing on the finer details and aspects of design in all of my work. My passion extends beyond coding through my interests and hobbies."
                                    buttons={[
                                        {
                                            text: "Learn more about me!",
                                            link: "/portfolio-website/#/about",
                                        },
                                    ]}
                                    width="20vw"
                                />
                            </ScrollAnimation>

                            <section className="homescreenProjects">
                                <h1 className="header">
                                    Here are some of my projects!
                                </h1>
                                <article className="projectDisplay">
                                    <HomeProject
                                        image="homeprojects/powerboard.png"
                                        name="PowerBoard"
                                        caption="Powerboard is a task management application. It allows you to visualize and execute tasks more efficiently. I designed the web application from scratch and created it using SvelteKit and the Google Firebase API."
                                        buttons={[
                                            {
                                                text: "Try It Out!",
                                                link: "https://powerboard-f656e.web.app/",
                                            },
                                            {
                                                text: "GitHub Repository",
                                                link: "https://github.com/DVDOSO/PowerBoard",
                                            },
                                        ]}
                                    />
                                    <HomeProject
                                        image="homeprojects/matchdodge.png"
                                        name="Match Dodge"
                                        caption='Created using the Pygame module in Python, this game combines the popular memory card party game with the gameplay of a "Bullet Hell" game. All graphics and UI were designed from scratch in Photoshop.'
                                        buttons={[
                                            {
                                                text: "Gameplay Demonstration",
                                                link: "https://www.youtube.com/watch?v=Yd_JLDGS8_o",
                                            },
                                            {
                                                text: "GitHub Repository",
                                                link: "https://github.com/DVDOSO/MatchDodge",
                                            },
                                        ]}
                                    />
                                </article>
                                <a href="/portfolio-website/#/projects" className="projectsLink">
                                    Check out the rest of my projects!
                                </a>
                            </section>

                            <ScrollAnimation animateIn="animate__animated animate__bounceIn">
                                <Section
                                    imgPath="resume-cv_2427462.png"
                                    order="left"
                                    color="darkmagenta"
                                    title="Qualifications."
                                    text="I strive for excellence in whatever I do, believing that dedication and hard work lead to success. Over the course of my academic and professional career, I have gained numerous valuable skills. I continuously seek opportunities to learn and grow, ensuring I stay at the forefront of my field."
                                    buttons={[
                                        {
                                            text: "Download my resume!",
                                            link: "/portfolio-website/#/resume",
                                        } /*, {text: 'Contact me!', link: '#/resume'}*/,
                                    ]}
                                    width="18vw"
                                />
                            </ScrollAnimation>
                        </section>
                        <Contact color="darkmagenta" line="yes" />
                        <footer>
                            <p>&copy; David Jiang 2024</p>
                            <a
                                className="footnoteLink"
                                href="https://github.com/DVDOSO/portfolio-website">
                                GitHub Repository
                            </a>
                        </footer>
                    </div>
                </>
            )}
        </>
    );
}

export default Home;

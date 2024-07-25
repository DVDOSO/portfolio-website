import Nav from "../components/Nav";
import Section from "../components/Section";
import Contact from "../components/Contact";
import styles from "./FoodImages.module.css";
import HexagonBackground from "../components/HexagonBackground";
import ScrollAnimation from "react-animate-on-scroll";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

function About() {
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
            {isLoading && <Loading color="aquamarine" />}
            {loaded && (
                <>
                    <HexagonBackground
                        image="hexagons/hexagon_about.svg"
                        opacity={1}
                    />
                    <div className="background" />
                    <div className="container about">
                        <Nav color="aquamarine" />
                        <section className="hero about">
                            <article className="mainCaption">
                                <h1 className="mainTitle">
                                    <b id="headerBold">
                                        About Me<span id="accent1">.</span>
                                    </b>
                                </h1>
                                <p className="caption about">
                                    I am a software developer and designer who
                                    is known for focusing on fine details and
                                    aesthetics. My wide range of interests
                                    inspire a variety of creative aspects in my
                                    work.
                                </p>
                            </article>
                            <p className="scroll">Scroll ▼</p>
                        </section>

                        <section className="sections">
                            <ScrollAnimation animateIn="animate__animated animate__bounceIn">
                                <Section
                                    imgPath="city_3153887.png"
                                    order="left"
                                    color="aquamarine"
                                    text={
                                        "Born in the suburbs of Toronto, my upbringing was rooted in a rigorous academic environment that fostered a passion for creativity and innovation. I am a high scoring International Baccalaureate (IB) graduate who always strives for excellence. Throughout my studies, I have consistently sought out challenges to push my limits and expand my knowledge.\n\nNow as a current computer science student at the University of Waterloo, this drive has equipped me with strong skills to tackle whatever challenging tasks that arise, both in school and the workforce."
                                    }
                                    width="22vw"
                                    title="Committed Learner."
                                    buttons={[]}
                                />
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="animate__animated animate__bounceIn">
                                <Section
                                    imgPath="data_1197460.png"
                                    order="right"
                                    color="aquamarine"
                                    text={
                                        "I first started coding at 11 years old, diving into Python and discovering my passion for programming. In high school, I began competitive programming with C++, honing my problem-solving skills and learning to write efficient code.\n\nBy my senior year, I began creating projects and exploring web development, building dynamic websites and applications. This journey has solidified my love for coding and driven me to continuously expand my technical expertise."
                                    }
                                    width="17vw"
                                    title="Programmer."
                                    buttons={[]}
                                />
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="animate__animated animate__bounceIn">
                                <Section
                                    imgPath="burgericon.png"
                                    order="left"
                                    color="aquamarine"
                                    text={
                                        "Beyond coding, I have a deep love for trying new food from different places and cultures. Exploring diverse cuisines allows me to experience the world through its flavors and traditions. Whenever I travel, I prioritize eating at small restaurants as opposed to restaurant chains in order to experience high quality authentic food while simultaneously supporting local businesses.\n\nThis passion extends to the kitchen, where I have always enjoyed cooking ever since I was a child. I regularly watch cooking and food travel videos on YouTube which inspire me to try new dishes and cooking techniques.\n\nBelow are some of the delicious foods I have had the pleasure of trying."
                                    }
                                    width="20vw"
                                    title="Food Fanatic."
                                    buttons={[]}
                                />
                            </ScrollAnimation>

                            <section className={styles.images}>
                                <img
                                    src="./food/2022-10-10-21-40-48-727.jpg"
                                    alt="Steak"
                                    className={styles.portrait}
                                />
                                <img
                                    src="./food/2023-06-23-11-54-46-234.jpg"
                                    alt="Korean Chicken"
                                    className={styles.portrait}
                                />
                                <img
                                    src="./food/IMG_20240719_142134.jpg"
                                    alt="Ribs"
                                    className={styles.portrait}
                                />
                                <img
                                    src="./food/2024-05-14-16-57-18-497.jpg"
                                    alt="2D Cake"
                                    className={styles.portrait}
                                />
                                <img
                                    src="./food/2024-05-16-18-42-22-283.jpg"
                                    alt="Okonomiyaki"
                                    className={styles.portrait}
                                />
                                <img
                                    src="./food/2024-05-19-21-01-50-686.jpg"
                                    alt="Wagyu"
                                    className={styles.portrait}
                                />
                                <img
                                    src="./food/2024-05-21-15-17-36-661.jpg"
                                    alt="Burger"
                                    className={styles.portrait}
                                />
                                <img
                                    src="./food/IMG_20240523_131024.jpg"
                                    alt="Ice Cream"
                                    className={styles.portrait}
                                />
                                <img
                                    src="./food/2023-07-22-20-20-39-689.jpg"
                                    alt="Curry"
                                    className={styles.landscape}
                                />
                                <img
                                    src="./food/2024-05-15-14-12-28-621.jpg"
                                    alt="Tempura"
                                    className={styles.landscape}
                                />
                            </section>

                            <ScrollAnimation animateIn="animate__animated animate__bounceIn">
                                <Section
                                    imgPath="sportsicon.png"
                                    order="right"
                                    color="aquamarine"
                                    text={
                                        "I'm also a passionate sports fan who loves playing all kinds of sports. Whether it's basketball, volleyball, soccer, or any others, I'm always eager to play whenever I am able. As a spectator, I follow the NBA, NHL, and international soccer closely. I support the Toronto Raptors, Toronto Maple Leafs, and the Canadian men's national team. By playing and watching these games, I get to stay active while also bringing excitement and joy to my life."
                                    }
                                    width="20vw"
                                    title="Sports Fan."
                                    buttons={[]}
                                />
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="animate__animated animate__bounceIn">
                                <Section
                                    imgPath="videogames_2737379.png"
                                    order="left"
                                    color="aquamarine"
                                    text={
                                        "When I have spare time, I like to play video games. Often having a negative stigma among older generations, gaming has evolved remarkably since its inception. I am passionate about gaming as an art form, recognizing its power to convey profound messages and stories.\n\nThe modern gaming industry now creates immersive experiences that blend art, narrative, and technology. In my free time, I enjoy experiencing the seemingly unending passion and drive that game developers pour into their games."
                                    }
                                    width="22vw"
                                    title="Video Game Enthusiast."
                                    buttons={[]}
                                />
                            </ScrollAnimation>
                        </section>

                        <Contact color="aquamarine" line="yes" />

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

export default About;

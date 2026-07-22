import Nav from "../components/Nav";
import Section from "../components/Section";
import Contact from "../components/Contact";
import styles from "./FoodImages.module.css";
import HexagonBackground from "../components/HexagonBackground";
import ScrollCue from "../components/ScrollCue";

function About() {
    const accent = "var(--ACCENT)";

    return (
        <>
            <HexagonBackground
                image="hexagons/hexagon_about.svg"
                opacity={1}
            />
            <div className="background" />
            <div className="container about">
                <Nav color={accent} />
                <section className="hero about">
                    <article className="mainCaption">
                        <p className="eyebrow">About</p>
                        <h1 className="mainTitle">
                            <b id="headerBold">
                                About Me<span id="accent1">.</span>
                            </b>
                        </h1>
                        <p className="caption about">
                            A bit about who I am outside the resume: how I
                            got into code, what I care about, and what I do
                            when I&apos;m not at a keyboard.
                        </p>
                    </article>
                    <ScrollCue />
                </section>

                <section className="sections">
                    <Section
                        imgPath="data_1197460.png"
                        order="left"
                        color={accent}
                        tint
                        eyebrow="The engineer"
                        title="Programmer."
                        text={
                            "I started coding at 11, hacking on Python projects after school and falling in love with the loop of build-break-learn. By high school I was deep in competitive programming with C++, training for the Canadian Computing Competition and learning to write code that wasn't just correct but fast.\n\nNow as a Computer Science co-op student at the University of Waterloo, I focus on building full-stack systems end-to-end: backends, APIs, frontends, and the infrastructure that ties them together. I care about systems that hold up under real load, code that reads cleanly six months later, and details most users will never consciously notice."
                        }
                        width="17vw"
                        buttons={[]}
                    />

                    <Section
                        imgPath="burgericon.png"
                        order="right"
                        color={accent}
                        tint
                        eyebrow="Beyond the code"
                        title="Outside of code."
                        text={
                            "My faith is central to how I move through life. It shapes my values, how I treat people, and how I approach challenges. It keeps me grounded when work doesn't.\n\nBeyond that, I'm a relentless food explorer. When I travel, I skip the chains and seek out small local restaurants, usually with the best food and the best stories. I cook too, mostly chasing dishes I've eaten somewhere and want to recreate. The gallery below is a small sample.\n\nI also play and watch a lot of sports: basketball, volleyball, soccer on the field; Raptors, Leafs, and Canadian men's soccer on TV. And in the gaps, video games. I treat the medium as an art form and admire the engineering and craft that goes into the best of them."
                        }
                        width="20vw"
                        buttons={[]}
                    />

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
                </section>

                <Contact color={accent} line="yes" />

                <footer>
                    <p>&copy; David Jiang {new Date().getFullYear()}</p>
                    <a
                        className="footnoteLink"
                        href="https://github.com/DVDOSO/portfolio-website">
                        GitHub Repository
                    </a>
                </footer>
            </div>
        </>
    );
}

export default About;

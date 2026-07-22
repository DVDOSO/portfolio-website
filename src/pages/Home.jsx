import Nav from "../components/Nav";
import SocialButton from "../components/SocialButton";
import Section from "../components/Section";
import Contact from "../components/Contact";
import HomeProject from "../components/HomeProject";
import Experience from "../components/Experience";
import Avatar from "../components/Avatar";
import CursorHint from "../components/CursorHint";
import ScrollCue from "../components/ScrollCue";
import "./styles.css";
import HexagonBackground from "../components/HexagonBackground";

function Home() {
    const accent = "var(--ACCENT)";

    return (
        <>
            <HexagonBackground
                image="hexagons/hexagon_about.svg"
                opacity={1}
            />
            <div className="background" />
            <div className="container home">
                <Nav color={accent} />

                <section className="hero">
                    <article className="mainCaption">
                        <p className="availability">
                            <span className="availabilityDot" />
                            Open to internship opportunities
                        </p>
                        <p className="eyebrow">Software Engineer</p>
                        <h1 className="mainTitle">
                            Hello, my <span id="nowrap">name is</span>{" "}
                            <br />{" "}
                            <b id="headerBold">
                                David Jiang<span id="accent1">.</span>
                            </b>
                        </h1>
                        <p className="caption">
                            Full-stack engineer building practical systems at
                            the intersection of <b id="darkcolor2">web</b> and{" "}
                            <b id="darkcolor2">computer vision</b>.
                            Previously at <b id="darkcolor2">APi Group Inc</b> and <b id="darkcolor2">StackAdapt</b>.
                            Computer Science (co-op) at the{" "}
                            <b id="darkcolor2">University of Waterloo</b>.
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
                                address="https://www.linkedin.com/in/davidjiangdev/"
                                icon="icons8-linkedin.svg"
                                width={50}
                            />
                        </section>
                    </article>
                    <div className="avatarBlock">
                        <Avatar
                            className="avatar"
                            src="avatar.png"
                            alt="avatar"
                            width={450}
                        />
                        <CursorHint />
                    </div>
                    <ScrollCue />
                </section>

                <section className="sections">
                    <Section
                        imgPath="placeholders/about-me.svg"
                        order="right"
                        color={accent}
                        eyebrow="Who I am"
                        title="About Me."
                        text="I'm a software engineer focused on shipping well-built products end-to-end from system design through deployment. I care about the details: clean APIs, responsive UIs, and tests that actually catch regressions."
                        buttons={[
                            {
                                text: "Learn more about me",
                                link: "#/about",
                            },
                        ]}
                        width="20vw"
                    />

                    <Experience color={accent} />

                    <section className="homescreenProjects">
                        <h1 className="header">Featured projects.</h1>
                        <article className="projectDisplay">
                            <HomeProject
                                image="homeprojects/camera-watch.svg"
                                name="Camera Watch"
                                caption="Computer vision dashboard that flags camera tampering by comparing live frames against references with SSIM, ORB, and RANSAC homography. Auto-tuned thresholds reach 94.3% accuracy on 500 labeled samples."
                                buttons={[
                                    {
                                        text: "GitHub Repository",
                                        link: "https://github.com/DVDOSO/camera-view-recognition",
                                    },
                                ]}
                            />
                            <HomeProject
                                image="homeprojects/gameboy.svg"
                                name="Game Boy Emulator"
                                caption="Game Boy emulator built from scratch in C++ with SDL2, running Tetris and Pokémon Red at full speed. Complete LR35902 CPU passing all 501 SingleStepTests opcodes, full PPU rendering, and MBC1/MBC3 cartridge banking."
                                buttons={[
                                    {
                                        text: "GitHub Repository",
                                        link: "https://github.com/DVDOSO/Gameboy-Emulator",
                                    },
                                ]}
                            />
                        </article>
                        <a href="#/projects" className="projectsLink">
                            See all projects
                        </a>
                    </section>

                    <Section
                        imgPath="placeholders/qualifications.svg"
                        order="left"
                        color={accent}
                        eyebrow="Credentials"
                        title="Qualifications."
                        text="University of Waterloo Honours Computer Science (co-op), GPA 3.96. CCC Senior 95th percentile, Euclid Distinction. Strong full-stack foundation across TypeScript, React/Next.js, .NET Core, FastAPI, and PostgreSQL."
                        buttons={[
                            {
                                text: "Download my resume",
                                link: "David_Jiang_Resume.pdf",
                                download: true,
                            },
                        ]}
                        width="18vw"
                    />
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

export default Home;

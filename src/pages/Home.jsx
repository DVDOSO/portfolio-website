import Nav from "../components/Nav";
import SocialButton from "../components/SocialButton";
import Section from "../components/Section";
import Contact from "../components/Contact";
import HomeProject from "../components/HomeProject";
import Experience from "../components/Experience";
import "./styles.css";
import HexagonBackground from "../components/HexagonBackground";

function Home() {
    const accent = "aquamarine";

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
                            <b id="darkcolor2">computer vision</b>. Currently
                            interning at <b id="darkcolor2">API Group (Habtech)</b>.
                            Previously at <b id="darkcolor2">StackAdapt</b>.
                            Computer Science co-op at the{" "}
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
                    <img
                        className="avatar"
                        src="avatar.png"
                        alt="avatar"
                        width={450}
                    />
                    <p className="scroll">Scroll ▼</p>
                </section>

                <section className="sections">
                    <Section
                        imgPath="laptop_2490636.png"
                        order="right"
                        color={accent}
                        title="About Me."
                        text="I'm a software engineer focused on shipping well-built products end-to-end — from system design through deployment. I care about the details: clean APIs, responsive UIs, and tests that actually catch regressions."
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
                                caption="A full-stack computer vision dashboard that flags camera tampering by comparing live frames against reference images using SSIM, ORB feature matching, and RANSAC homography. An auto-tuning service grid-searches detection thresholds against user labels to maximize F1, reaching 94.3% accuracy on 500 labeled samples."
                                buttons={[
                                    {
                                        text: "GitHub Repository",
                                        link: "https://github.com/DVDOSO/camera-view-recognition",
                                    },
                                ]}
                            />
                            <HomeProject
                                image="homeprojects/powerboard.png"
                                name="PowerBoard"
                                caption="A full-stack task management application based on the Eisenhower matrix concept. Built from scratch with SvelteKit and Google Firebase, featuring real-time multi-device sync, Firebase Auth, and a friction-free guest mode backed by in-memory Svelte stores."
                                buttons={[
                                    {
                                        text: "Try It Out",
                                        link: "https://powerboard-f656e.web.app/",
                                    },
                                    {
                                        text: "GitHub Repository",
                                        link: "https://github.com/DVDOSO/PowerBoard",
                                    },
                                ]}
                            />
                        </article>
                        <a href="#/projects" className="projectsLink">
                            See all projects
                        </a>
                    </section>

                    <Section
                        imgPath="resume-cv_2427462.png"
                        order="left"
                        color={accent}
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

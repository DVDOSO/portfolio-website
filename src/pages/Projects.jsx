import Nav from "../components/Nav";
import Section from "../components/Section";
import ProjectIcon from "../components/ProjectIcon";
import Contact from "../components/Contact";
import HexagonBackground from "../components/HexagonBackground";

function Projects() {
    const accent = "aquamarine";

    return (
        <>
            <HexagonBackground
                image="hexagons/hexagon_about.svg"
                opacity={1}
            />
            <div className="background" />
            <div className="container projects">
                <Nav color={accent} />
                <section className="hero projects">
                    <article className="mainCaption">
                        <p className="eyebrow">Selected work</p>
                        <h1 className="mainTitle">
                            <b id="headerBold">
                                My Projects<span id="accent1">.</span>
                            </b>
                        </h1>
                        <p className="caption projects">
                            A mix of internship-adjacent systems, side projects,
                            and learning experiments — from full-stack computer
                            vision dashboards to a Gameboy emulator in C.
                        </p>
                    </article>
                    <p className="scroll">Scroll ▼</p>
                </section>

                <section className="starred">
                    <Section
                        imgPath="starred/camera-watch.svg"
                        order="left"
                        color={accent}
                        title="Camera Watch"
                        text={
                            "A full-stack computer vision dashboard for detecting camera obstructions and view changes. Compares live frames against reference images using three complementary similarity signals — SSIM, ORB feature matching, and RANSAC homography inliers — and flags suspect frames as ALERT or NORMAL.\n\nAn auto-tuning service grid-searches over thresholds to maximize F1 against user-labeled samples, replacing brittle manual tuning. Reached 94.3% accuracy on 500 labeled samples.\n\nAlso ships a synthetic data generator that applies 16 image transforms (occlusion, rotation, perspective, noise) to a base reference image, so users can tune detection without first collecting dozens of real captures.\n\nBuilt with FastAPI (async, Python 3.11), Next.js App Router, React Query, shadcn/ui + Tailwind, PostgreSQL 16, and OpenCV + scikit-image. Containerized end-to-end with Docker Compose and Alembic migrations."
                        }
                        width="30vw"
                        buttons={[
                            {
                                text: "GitHub Repository",
                                link: "https://github.com/DVDOSO/camera-view-recognition",
                            },
                        ]}
                    />

                    <Section
                        imgPath="starred/powerboard.png"
                        order="right"
                        color={accent}
                        text={
                            "PowerBoard is a full-stack task management application that helps you organise your life. With a modern design, it allows you to create, order, and execute tasks more efficiently.\n\nBased on the concept of the Eisenhower matrix, PowerBoard helps prioritize tasks by importance vs. urgency, with hover-to-reveal descriptions.\n\nBuilt with SvelteKit and Google Firebase. Implements Firebase Auth and Realtime Database for persistent multi-device sync, alongside a guest mode backed by in-memory Svelte stores for friction-free trial access without account creation."
                        }
                        width="25vw"
                        title="PowerBoard"
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
                </section>

                <section className="projectBrowser">
                    <div className="projectBrowserInner">
                        <ProjectIcon
                            name="Camera Watch"
                            icon="projecticons/camera-watch.svg"
                            link="https://github.com/DVDOSO/camera-view-recognition"
                        />
                        <ProjectIcon
                            name="PowerBoard"
                            icon="projecticons/powerboard.png"
                            link="https://github.com/DVDOSO/PowerBoard"
                        />
                        <ProjectIcon
                            name="YouTube to MP3 Converter"
                            icon="projecticons/youtube-mp3.svg"
                            link="https://github.com/DVDOSO/youtube-mp3-downloader"
                        />
                        <ProjectIcon
                            name="Gameboy Emulator"
                            icon="projecticons/gameboy.svg"
                            link="https://github.com/DVDOSO/Gameboy-Emulator"
                        />
                        <ProjectIcon
                            name="Match Dodge"
                            icon="https://cdn-icons-png.freepik.com/512/867/867352.png"
                            link="https://github.com/DVDOSO/MatchDodge"
                        />
                        <ProjectIcon
                            name="Portfolio Website"
                            icon="avatar.png"
                            link="https://github.com/DVDOSO/portfolio-website"
                        />
                        <ProjectIcon
                            name="Short Clip Generator"
                            icon="https://marketplace.canva.com/EJqY8/MAGiEqEJqY8/1/tl/canva-blur-neon-camera-logo-with-instagram-gradient-background-icon-MAGiEqEJqY8.png"
                            link="https://github.com/DVDOSO/Clip-Generator"
                        />
                        <ProjectIcon
                            name="Reading Chrome Extension"
                            icon="https://static.thenounproject.com/png/1429552-200.png"
                            link="https://github.com/DVDOSO/read-aloud-chrome-extension"
                        />
                        <ProjectIcon
                            name="Python & SQL Task Planner"
                            icon="https://cdn4.iconfinder.com/data/icons/project-management-6-2/65/262-512.png"
                            link="https://github.com/DVDOSO/taskPlanner"
                        />
                        <ProjectIcon
                            name="Programming Journal"
                            icon="https://cdn-icons-png.flaticon.com/512/1005/1005142.png"
                            link="https://dvdoso.github.io/dvdoso-competitive-programming-journal/"
                        />
                        <ProjectIcon
                            name="Pygame Pong"
                            icon="https://cdn-icons-png.flaticon.com/512/7619/7619818.png"
                            link="https://github.com/DVDOSO/pong"
                        />
                        <ProjectIcon
                            name="Python Wordle"
                            icon="https://play-lh.googleusercontent.com/6JSPr7ujjFuwqwqS44uhNV4IMNColj2Qe7ENMJWmg_BgTzuW5o70d3HPrxetNWaGC5Bj=w240-h480-rw"
                            link="https://github.com/DVDOSO/wordle"
                        />
                    </div>
                </section>

                <Contact color={accent} />

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

export default Projects;

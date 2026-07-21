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
                            Systems, side projects, and experiments: from
                            computer vision dashboards to a Game Boy emulator
                            in C++.
                        </p>
                    </article>
                    <p className="scroll">Scroll ▼</p>
                </section>

                <section className="starred">
                    <Section
                        imgPath="starred/camera-watch.svg"
                        order="left"
                        color={accent}
                        title="Camera Obstruction & Movement Detection App"
                        text={
                            "A full-stack computer vision dashboard that detects camera obstructions and view changes by comparing live frames against references using three complementary signals: SSIM, ORB feature matching, and RANSAC homography inliers. An auto-tuning service grid-searches thresholds to maximize F1 against user labels, reaching 94.3% accuracy on 500 samples.\n\nBuilt with FastAPI, Next.js, React Query, shadcn/ui + Tailwind, PostgreSQL, and OpenCV + scikit-image, containerized end-to-end with Docker Compose."
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
                        imgPath="starred/gameboy.png"
                        order="right"
                        color={accent}
                        text={
                            "A cycle-aware DMG (original Game Boy) emulator written from scratch in C++ with SDL2, running commercial titles like Tetris and Pokémon Red at full speed. The CPU is a complete LR35902 (SM83) core that passes all 501 opcodes of the SingleStepTests conformance suite.\n\nThe PPU renders background, window, and sprite layers with priority handling and the 10-sprites-per-line hardware limit, backed by MBC1/MBC3 cartridge banking, hardware-accurate DIV/TIMA timers, and full interrupt handling for VBlank, STAT, Timer, Serial, and Joypad events."
                        }
                        width="25vw"
                        title="Game Boy Emulator"
                        buttons={[
                            {
                                text: "GitHub Repository",
                                link: "https://github.com/DVDOSO/Gameboy-Emulator",
                            },
                        ]}
                    />
                </section>

                <section className="projectBrowser">
                    <div className="projectBrowserInner">
                        <ProjectIcon
                            name="Camera/Movement Detection App"
                            icon="projecticons/camera-watch.svg"
                            link="https://github.com/DVDOSO/camera-view-recognition"
                        />
                        <ProjectIcon
                            name="Gameboy Emulator"
                            icon="projecticons/gameboy.svg"
                            link="https://github.com/DVDOSO/Gameboy-Emulator"
                        />
                        <ProjectIcon
                            name="Eisenhower Matrix Planning App"
                            icon="projecticons/powerboard.png"
                            link="https://github.com/DVDOSO/PowerBoard"
                        />
                        <ProjectIcon
                            name="YouTube to MP3 Converter"
                            icon="projecticons/youtube-mp3.svg"
                            link="https://github.com/DVDOSO/youtube-mp3-downloader"
                        />
                        <ProjectIcon
                            name="Pygame Matching Game"
                            icon="https://cdn-icons-png.freepik.com/512/867/867352.png"
                            link="https://github.com/DVDOSO/MatchDodge"
                        />
                        <ProjectIcon
                            name="Portfolio Website"
                            icon="avatar.png"
                            link="https://github.com/DVDOSO/portfolio-website"
                        />
                        <ProjectIcon
                            name="Short-Form Clip Generator"
                            icon="https://marketplace.canva.com/EJqY8/MAGiEqEJqY8/1/tl/canva-blur-neon-camera-logo-with-instagram-gradient-background-icon-MAGiEqEJqY8.png"
                            link="https://github.com/DVDOSO/Clip-Generator"
                        />
                        <ProjectIcon
                            name="Read-Aloud Chrome Extension"
                            icon="https://static.thenounproject.com/png/1429552-200.png"
                            link="https://github.com/DVDOSO/read-aloud-chrome-extension"
                        />
                        <ProjectIcon
                            name="Python & SQL Task Planner"
                            icon="https://cdn4.iconfinder.com/data/icons/project-management-6-2/65/262-512.png"
                            link="https://github.com/DVDOSO/taskPlanner"
                        />
                        <ProjectIcon
                            name="Competitive Programming Journal"
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

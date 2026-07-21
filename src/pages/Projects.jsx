import Nav from "../components/Nav";
import Section from "../components/Section";
import ProjectIcon from "../components/ProjectIcon";
import Contact from "../components/Contact";
import HexagonBackground from "../components/HexagonBackground";

function Projects() {
    const accent = "var(--ACCENT)";

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
                        figureStyle="media"
                        eyebrow="Featured project"
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
                        imgPath="starred/gameboy.svg"
                        order="right"
                        color={accent}
                        figureStyle="media"
                        eyebrow="Featured project"
                        text={
                            "A cycle-aware DMG (original Game Boy) emulator written from scratch in C++ with SDL2, running commercial titles like Tetris and Pokémon Red at full speed. The CPU is a complete LR35902 (SM83) core that passes all 501 opcodes of the SingleStepTests conformance suite.\n\nThe PPU renders background, window, and sprite layers with priority handling and the 10-sprites-per-line hardware limit, backed by MBC1/MBC3 cartridge banking, hardware-accurate DIV/TIMA timers, and full interrupt handling for VBlank, STAT, Timer, Serial, and Joypad events."
                        }
                        width="25vw"
                        title="C++ Game Boy Emulator"
                        buttons={[
                            {
                                text: "GitHub Repository",
                                link: "https://github.com/DVDOSO/Gameboy-Emulator",
                            },
                        ]}
                    />
                </section>

                <section className="projectBrowser">
                    <div className="projectBrowserHead">
                        <p className="projectBrowserEyebrow">The full list</p>
                        <h2 className="projectBrowserTitle">
                            All Projects<span id="accent1">.</span>
                        </h2>
                    </div>
                    <div className="projectBrowserInner">
                        <ProjectIcon
                            featured
                            name="Camera/Movement Detection App"
                            icon="projecticons/ph-camera.svg"
                            tagline="Computer-vision dashboard that flags camera tampering by comparing live frames with SSIM, ORB and RANSAC homography."
                            tags={["FastAPI", "Next.js", "OpenCV", "PostgreSQL", "Alembic"]}
                            link="https://github.com/DVDOSO/camera-view-recognition"
                        />
                        <ProjectIcon
                            featured
                            name="C++ Gameboy Emulator"
                            icon="projecticons/ph-gameboy.svg"
                            tagline="Cycle-accurate DMG emulator written from scratch in C++, running Tetris and Pokémon Red at full speed."
                            tags={["C++", "SDL2"]}
                            link="https://github.com/DVDOSO/Gameboy-Emulator"
                        />
                        <ProjectIcon
                            featured
                            wide
                            name="Eisenhower Matrix Planning App"
                            icon="projecticons/ph-powerboard.svg"
                            tagline="Task planner that sorts work into an Eisenhower matrix by urgency and importance so you focus on what matters."
                            tags={["SvelteKit", "Firebase", "Google Cloud Platform"]}
                            link="https://github.com/DVDOSO/PowerBoard"
                        />
                        <ProjectIcon
                            name="YouTube to MP3 Converter"
                            icon="projecticons/ph-mp3.svg"
                            link="https://github.com/DVDOSO/youtube-mp3-downloader"
                        />
                        <ProjectIcon
                            name="Pygame Bullet Dodging Game"
                            icon="projecticons/ph-matchdodge.svg"
                            link="https://github.com/DVDOSO/MatchDodge"
                        />
                        <ProjectIcon
                            name="Portfolio Website"
                            icon="projecticons/ph-portfolio.svg"
                            link="https://github.com/DVDOSO/portfolio-website"
                        />
                        <ProjectIcon
                            name="Short-Form Clip Generator"
                            icon="projecticons/ph-clipgen.svg"
                            link="https://github.com/DVDOSO/Clip-Generator"
                        />
                        <ProjectIcon
                            name="Read-Aloud Chrome Extension"
                            icon="projecticons/ph-readaloud.svg"
                            link="https://github.com/DVDOSO/read-aloud-chrome-extension"
                        />
                        <ProjectIcon
                            name="Python & SQL Task Planner"
                            icon="projecticons/ph-taskplanner.svg"
                            link="https://github.com/DVDOSO/taskPlanner"
                        />
                        <ProjectIcon
                            name="Competitive Programming Journal"
                            icon="projecticons/ph-cpjournal.svg"
                            link="https://dvdoso.github.io/dvdoso-competitive-programming-journal/"
                        />
                        <ProjectIcon
                            name="Pygame Pong"
                            icon="projecticons/ph-pong.svg"
                            link="https://github.com/DVDOSO/pong"
                        />
                        <ProjectIcon
                            name="Python Wordle"
                            icon="projecticons/ph-wordle.svg"
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

import Nav from "../components/Nav";
import Section from "../components/Section";
import ProjectIcon from "../components/ProjectIcon";
import Contact from "../components/Contact";
import HexagonBackground from "../components/HexagonBackground";

function Projects() {
    return (
        <>
        <HexagonBackground image='hexagons/hexagon_projects.svg' opacity={1} />
        <div className="background" />
        <div className="container projects">
            <Nav color='tomato'/>
            <section className="hero projects">
                <article className="mainCaption">
                    <h1 className="mainTitle">
                        <b id="headerBold">
                            My Projects<span id="accent1">.</span>
                        </b>
                    </h1>
                    <p className="caption about">
                        Since learning how to code at 11 years old, I have worked on several projects throughout 
                        my coding journey. Some of these projects were made for the purposes of school, while others
                        were simply passion projects in which I pushed myself to my limits.
                        Feel free to check them out!
                    </p>
                </article>
            </section>

            <section className="starred">
                <Section
                    imgPath='starred/powerboard.png'
                    order="left"
                    color="tomato"
                    text={"Powerboard is a task management application that helps you organise your life. With a modern design, Powerboard allows you to create, order, and execute tasks more efficiently.\n\nBased on the concept of the Eisenhower matrix, Powerboard allows you to better prioritize your tasks. Organise and schedule your tasks based off its colour and its position on the matrix.\n\nI created this web application using SvelteKit and Google Firebase. UI/UX designs were all done from scratch."}
                    width='30vw'
                    title='PowerBoard'
                    buttons={[{text: "Try It Out!", link: "https://powerboard-f656e.web.app/"}, {text: "GitHub Repository", link: "https://github.com/DVDOSO/PowerBoard"}]}
                />
                <Section
                    imgPath='starred/matchdodge.png'
                    order="right"
                    color="tomato"
                    text={"Originally created for a game jam using the Pygame module in Python, this game combines the popular memory card party game with the gameplay of a \"Bullet Hell\" game. The goal of the game is to flip over all of the pairs of cards while dodging incoming bullets. The game features three difficulties with randomized cards every playthrough. All graphics and UI were designed from scratch in Adobe Photoshop."}
                    width='25vw'
                    title='Match Dodge'
                    buttons={[{text: "Click here for a Gameplay Demonstration!", link: "https://www.youtube.com/watch?v=Yd_JLDGS8_o"}, {text: "GitHub Repository", link: "https://github.com/DVDOSO/MatchDodge"}]}
                />
            </section>

            {/* Add projects here! */}
            <section className="projectBrowser">
                <ProjectIcon name='PowerBoard' icon='projecticons/powerboard.png' link='https://github.com/DVDOSO/PowerBoard' />
                <ProjectIcon name='Match Dodge' icon='https://cdn-icons-png.freepik.com/512/867/867352.png' link='https://github.com/DVDOSO/MatchDodge' />
                <ProjectIcon name='Portfolio Website' icon='avatar.png' link='https://github.com/DVDOSO/portfolio-website' />
                <ProjectIcon name='Python & SQL Task Planner' icon='https://cdn4.iconfinder.com/data/icons/project-management-6-2/65/262-512.png' link='https://github.com/DVDOSO/taskPlanner' />
                <ProjectIcon name='Pygame Pong' icon='https://cdn-icons-png.flaticon.com/512/7619/7619818.png' link='https://github.com/DVDOSO/pong' />
                <ProjectIcon name='Python Wordle' icon='https://play-lh.googleusercontent.com/6JSPr7ujjFuwqwqS44uhNV4IMNColj2Qe7ENMJWmg_BgTzuW5o70d3HPrxetNWaGC5Bj=w240-h480-rw' link='https://github.com/DVDOSO/wordle' />
            </section>

            <Contact color='tomato'/>

            <footer>
                <p>&copy; David Jiang 2024</p>
                <a className="footnoteLink" href="https://github.com/DVDOSO/portfolio-website">GitHub Repository</a>
            </footer>
        </div>
        </>
    )
}

export default Projects;
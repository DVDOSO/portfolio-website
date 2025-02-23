import styles from './ResumeContent.module.css';
import "animate.css";

function ResumeContent() {
    return (
        <div className={styles.flex}>
        <article className={styles.container}>
            <h2 className={styles.h2}>Education</h2>
            <h3 className={styles.h3}>University of Waterloo – 200 University Ave. West, Waterloo, ON</h3>
            <p className={styles.p}>Expected Graduation Date: Apr. 2029</p>
            <p className={styles.p}>Honours Computer Science Co-op program</p>
            <ul className={styles.ul}>
                <li className={styles.li}><b>GPA</b>: 3.98</li>
                <li className={styles.li}><b>Awards</b>: 95th percentile on the Canadian Computing Competition, Distinction on the Euclid Math Contest</li>
                <li className={styles.li}><b>Relevant Coursework</b>: Algorithm Design, Memory Management, Object Oriented Programming, Data Structures and Algorithms, Compilers, Linear Algebra, Calculus</li>
            </ul>
            <h2 className={styles.h2}>Skills</h2>
            <ul className={styles.ul}>
                <li className={styles.li}><b>Languages</b>:  Languages: JavaScript, TypeScript, Python, C, C++, Java, R, SQL, JSON, HTML, CSS, SCSS</li>
                <li className={styles.li}><b>Development Frameworks & APIs</b>: React.js, React Native, SvelteKit, Google Firebase API, Node.js</li>
                <li className={styles.li}><b>Tools</b>: Git, GitHub, VS Code, Google Cloud, Linux, Bash, Vite, Tailwind, SQLite3, NumPy, TensorFlow, PyTorch</li>
            </ul>

            <h2 className={styles.h2}>Projects</h2>

            <h3 className={styles.h3}>Full-stack Task Planning Web Application</h3>
            <p className={styles.p}>SvelteKit, Google Firebase API&#9;<a href="https://powerboard-f656e.web.app/dashboard">(Link)</a></p>
            <p className={styles.p}><a href="https://github.com/DVDOSO/PowerBoard">Source code</a></p>
            <ul className={styles.ul}>
                <li className={styles.li}>Designed and implemented a <b>full-stack</b> task management system with an interactive UI, gaining <b>30+ active users</b> in under a year</li>
                <li className={styles.li}>Engineered <b>Firebase Authentication</b> for secure login and <b>real-time database integration</b> for efficient state management</li>
                <li className={styles.li}>Optimized front-end rendering and <b>state management using Svelte stores</b>, ensuring a highly responsive user
                experience</li>
            </ul>

            <h3 className={styles.h3}>Python Instagram/Tiktok Clip Generator</h3>
            <p className={styles.p}>Python, Whisper, FFmpeg</p>
            <p className={styles.p}><a href="https://github.com/DVDOSO/Clip-Generator">Source code</a></p>
            <ul className={styles.ul}>
                <li className={styles.li}>Developed an <b>automated video processing pipeline</b> using Python, <b>cutting manual editing time by 95%+</b></li>
                <li className={styles.li}>Integrated <b>Whisper API</b> for high-accuracy subtitle generation, achieving <b>90%+ transcription precision</b></li>
                <li className={styles.li}>Automated video editing with MoviePy and FFmpeg, enabling <b>rapid production of over 50+ short-form clips</b> during testing</li>
            </ul>

            <h3 className={styles.h3}>Read Aloud Chrome Extension</h3>
            <p className={styles.p}>Manifest V3, JavaScript, SpeechSynthesis API</p>
            <p className={styles.p}><a href="https://github.com/DVDOSO/read-aloud-chrome-extension">Source code</a></p>
            <ul className={styles.ul}>
                <li className={styles.li}>Engineered a Chrome extension leveraging <b>JavaScript</b>, <b>Manifest V3</b>, and <b>SpeechSynthesis API</b> to convert on-screen text to speech, enhancing web accessibility</li>
                <li className={styles.li}> Designed and deployed an efficient UI for user interaction, tested across <b>multiple web environments</b></li>
            </ul>

            <h2 className={styles.h2}>Experience</h2>

            <h3 className={styles.h3}>Coding Club President – St. Robert Catholic High School, Thornhill, ON</h3>
            <p className={styles.p}>October 2022 - June 2024</p>
            <ul className={styles.ul}>
                <li className={styles.li}>Spearheaded and organized Python and <b>competitive programming</b> workshops, engaging <b>150+ students</b> and driving a <b>50%+ increase in Canadian Computing Competition participation</b></li>
                <li className={styles.li}>Designed and executed <b>algorithmic problem-solving</b> sessions, enhancing students’ proficiency in <b>data structures</b> and logic</li>
                <li className={styles.li}>Led development of internal coding events to simulate real-world technical interviews and improve problem-solving skills</li>
            </ul>

            <h3 className={styles.h3}>C++ and Web Development Course Designer and Instructor – Toronto Internationally Educated Individuals Association, Markham, ON</h3>
            <p className={styles.p}>July 2022 - August 2023</p>
            <ul className={styles.ul}>
                <li className={styles.li}>Authored and delivered <b>20+ interactive coding lectures</b> covering C++ concepts and web development</li>
                <li className={styles.li}>Built <b>web applications and C++ programs</b> as live demos to reinforce concepts and practical applications</li>
                <li className={styles.li}>Built and maintained professional relationships with students, parents, and association director, resulting in being <b>personally invited back to teach in subsequent years</b></li>
            </ul>

            <h3 className={styles.h3}>FIRST Robotics Team Programmer – Ram&apos;s Robotics, Thornhill, ON</h3>
            <p className={styles.p}>May 2023 - February 2024</p>
            <ul className={styles.ul}>
                <li className={styles.li}>Engineered core robotic movement algorithms using <b>OpenCV</b> and <b>RoadRunner</b>, enabling precise autonomous path planning</li>
                <li className={styles.li}>Contributed to <b>software integration and debugging</b>, achieving 1st <b>place</b> finishes in two qualifying competitions and <b>2nd place provincially</b></li>
            </ul>
        </article>
        </div>
    )
}

export default ResumeContent;
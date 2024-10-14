import styles from './ResumeContent.module.css';
import "animate.css";

function ResumeContent() {
    return (
        <div className={styles.flex}>
        <article className={styles.container}>
            <h2 className={styles.h2}>Skills</h2>
            <ul className={styles.ul}>
                <li className={styles.li}><b>Coding:</b> Python (Numpy, Pygame), Java, C, C++ (solved nearly 500 competitive programming problems), Git, SQL, HTML, CSS, SCSS, Bootstrap, Tailwind, JS, TS, React.js, SvelteKit, Google Firebase, SQLite, Vite</li>
                <li className={styles.li}><b>Tools</b>: GitHub, VSCode, Adobe Photoshop, Adobe Premiere Pro, Krita, Canva, Microsoft Office Programs, Google Drive Programs</li>
                <li className={styles.li}><b>Problem solving</b>: DMOJ Expert Rank, LeetCode</li>
                <li className={styles.li}><b>Highly commended design abilities</b>: UI/UX, digital art, poster/promotional media making</li>
                <br/>
                <li className={styles.li}>Proficient in English, Mandarin, and French</li>
                <li className={styles.li}>Exceptionally fast learner</li>
                <li className={styles.li}>Proven leadership and teamwork results</li>
                <li className={styles.li}>Excellent verbal and written communication</li>
                <li className={styles.li}>Reliable and responsible under high stress</li>
            </ul>

            <h2 className={styles.h2}>Experience</h2>
            <h3 className={styles.h3}>Coding Club President – St. Robert Catholic High School, Thornhill, ON</h3>
            <p className={styles.p}>October 2021 - June 2024</p>
            <ul className={styles.ul}>
                <li className={styles.li}>Taught Python and prepared material for up to 40 high school students</li>
                <li className={styles.li}>Organized and hosted multiple coding competitions for our school community</li>
                <li className={styles.li}>Prepared students with limited or no coding experience for the Canadian Computing Competition</li>
            </ul>
        
            <h3 className={styles.h3}>C++ and Web Development Course Designer and Instructor – Toronto Internationally Educated Individuals Association, Markham, ON</h3>
            <p className={styles.p}>July 2022 - August 2022 & July 2023 - August 2023</p>
            <ul className={styles.ul}>
                <li className={styles.li}>Taught C++ and web design to a group of students between the ages of 10-15 across North America</li>
                <li className={styles.li}>Created all class material and homework for students</li>
            </ul>

            <h3 className={styles.h3}>Python, Photoshop, Game Design, and Web Development Teacher Assistant – Three-Flavors Kids&apos; Club, Richmond Hill, ON</h3>
            <p className={styles.p}>July 2022 & July 2023</p>
            <ul className={styles.ul}>
                <li className={styles.li}>Helped Computer Camp counselors with organizing their responsibilities and lessons</li>
                <li className={styles.li}>Assisted more than 40 campers between the ages of 9-12 with their class work</li>
            </ul>

            <h3 className={styles.h3}>FIRST Robotics Team Programmer – Ram&apos;s Robotics, Thornhill, ON</h3>
            <p className={styles.p}>May 2023 - February 2024</p>
            <ul className={styles.ul}>
                <li className={styles.li}>Programmed movement, vision, sensors, and game strategies for robot</li>
                <li className={styles.li}>Team won first place in two qualifying competitions and placed second in the provincial competition</li>
            </ul>

            <h3 className={styles.h3}>Private IB French Tutor – Markham, ON</h3>
            <p className={styles.p}>October 2023 - May 2024</p>
            <ul className={styles.ul}>
                <li className={styles.li}>Supported student by enriching understanding of IB curriculum concepts</li>
                <li className={styles.li}>Taught techniques and tricks to excel on International Baccalaureate French exams</li>
            </ul>

            <h2 className={styles.h2}>Honours and Accomplishments</h2>
            <h3 className={styles.h3}>Canadian Computing Competition (CCC) Top 5% Globally</h3>
            <p className={styles.p}>Scored higher than 95% of all contestants globally in the CCC hosted by the University of Waterloo</p>

            <h3 className={styles.h3}>Math Competitions</h3>
            <ul className={styles.ul}>
                <li className={styles.li}>Placed within the top quartile out of all contestants in the Pascal, Fermat, Caley, Galois, Canadian Senior Mathematics Competition, and Euclid competitions hosted by the University of Waterloo</li>
                <li className={styles.li}>Invited to Math Bootcamp for performance on the Pascal Contest at York University</li>
            </ul>

            <h3 className={styles.h3}>French Qualifications</h3>
            <ul className={styles.ul}>
                <li className={styles.li}>Diplôme d&apos;études en langue française (DELF) level B2</li>
                <li className={styles.li}>Toronto Universities&apos; French Contest second place prize in the Core French Plus category</li>
            </ul>

            <h3 className={styles.h3}>United States of America Computing Olympiad (USACO) – Silver Division</h3>

            <h3 className={styles.h3}>Awards</h3>
            <ul className={styles.ul}>
                <li className={styles.li}>Leadership in Computer Technology award (2024)</li>
                <li className={styles.li}>IB Balanced Learner Profile Award (2024)</li>
                <li className={styles.li}>Highest mark in IB Physics (2023, 2024)</li>
            </ul>
            
            <h2 className={styles.h2}>Education</h2>
            <h3 className={styles.h3}>University of Waterloo – 200 University Ave. West, Waterloo, ON</h3>
            <p className={styles.p}>September 2024 - Present</p>
            <ul className={styles.ul}>
                <li className={styles.li}>Honours Computer Science Co-op program</li>
                <li className={styles.li}>Graduating summer 2029</li>
            </ul>

            <h3 className={styles.h3}>St. Robert Catholic High School – 8101 Leslie St, Thornhill, ON</h3>
            <p className={styles.p}>September 2020 - May 2024</p>
            <ul className={styles.ul}>
                <li className={styles.li}>Top performing International Baccalaureate (IB) diploma graduate</li>
                <li className={styles.li}>Achieved 42/45 diploma points, global average is 30/45</li>
                <li className={styles.li}>Grade average of 97%</li>
                <li className={styles.li}>Awarded the Leadership in Computer Technology award in graduation ceremony for efforts in coding club</li>
            </ul>
        </article>
        </div>
    )
}

export default ResumeContent;
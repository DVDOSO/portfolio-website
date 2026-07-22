import styles from "./Nav.module.css";

function Nav(props) {
    const accent = { "--ACCENT_COLOR_1": props.color };

    return (
        <nav className={styles.nav}>
            <a className={styles.logoLink} href="/">
                <img className={styles.logo} src="avatar.png" alt="icon" />
            </a>
            <a className={styles.pageLink} href="/" style={accent}>
                Home
            </a>
            <a
                className={styles.pageLink}
                href="/#/projects"
                style={accent}>
                Projects
            </a>
            <a
                className={styles.pageLink}
                href="David_Jiang_Resume.pdf"
                style={accent}
                download>
                <span>Resume</span>
                <svg
                    className={styles.downloadIcon}
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true">
                    <path d="M8 2v8.5" />
                    <path d="M3.75 7 8 11.25 12.25 7" />
                    <path d="M2.75 13.75h10.5" />
                </svg>
            </a>
            <a
                className={styles.pageLink}
                href="/#/about"
                style={accent}>
                About
            </a>
            <a
                className={styles.pageLink}
                href="https://github.com/DVDOSO"
                style={accent}
                target="_blank"
                rel="noreferrer">
                GitHub
            </a>
        </nav>
    );
}

export default Nav;

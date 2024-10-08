import styles from "./Nav.module.css";

function Nav(props) {
    return (
        <>
            <nav className={styles.nav}>
                <a className={styles.logoLink} href="/portfolio-website/">
                    <img className={styles.logo} src="avatar.png" alt="icon" />
                </a>
                <a
                    className={styles.pageLink}
                    href="/portfolio-website/"
                    style={{ "--ACCENT_COLOR_1": props.color }}>
                    Home
                </a>
                <a
                    className={styles.pageLink}
                    href="/portfolio-website/#/about"
                    style={{ "--ACCENT_COLOR_1": props.color }}>
                    About
                </a>
                <a
                    className={styles.pageLink}
                    href="/portfolio-website/#/projects"
                    style={{ "--ACCENT_COLOR_1": props.color }}>
                    Projects
                </a>
                <a
                    className={styles.pageLink}
                    href="/portfolio-website/#/resume"
                    style={{ "--ACCENT_COLOR_1": props.color }}>
                    Resume
                </a>
                {/* <a
                    className={styles.pageLink}
                    href="/#/blog"
                    style={{ "--ACCENT_COLOR_1": props.color }}>
                    Blog
                </a> */}
                <a
                    className={styles.pageLink}
                    href="https://github.com/DVDOSO"
                    style={{ "--ACCENT_COLOR_1": props.color }}>
                    GitHub
                </a>
            </nav>
        </>
    );
}

export default Nav;

import SocialButton from "./SocialButton";
import styles from "./Contact.module.css";

function Contact(props) {
    return (
        <section className={styles.container} style={{"--ACCENT_COLOR_1": props.color}}>
            <div className={styles.dividerContainer}><hr className={styles.divider}/></div>
            <h1 className={styles.header}>Contact Me!</h1>
            <p className={styles.blurb}>If you are interested in hiring me or collaborating with me on projects, feel free to reach out!</p>
            <a href="mailto:davidjiang0307@gmail.com" className={styles.email}>Email Me!</a>
            <section className={styles.socials}>
                <SocialButton
                    name="GitHub"
                    address="https://github.com/DVDOSO"
                    icon="github-mark.svg"
                    width={50}
                />
                <SocialButton name="LinkedIn" address="https://www.linkedin.com/in/david-jiang-187b86181/"
                    icon="icons8-linkedin.svg"
                    width={50}
                />
            </section>
        </section>
    )
}

export default Contact;
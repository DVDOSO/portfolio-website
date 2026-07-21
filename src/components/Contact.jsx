import SocialButton from "./SocialButton";
import styles from "./Contact.module.css";

function Contact(props) {
    return (
        <section className={styles.container} style={{"--ACCENT_COLOR_1": props.color}}>
            {props.line? <div className={styles.dividerContainer}><hr className={styles.divider}/></div> : ''}
            <h1 className={styles.header}>Get in touch<span id="accent1">.</span></h1>
            <p className={styles.blurb}>Open to internships and collaborations. Email is the fastest way to reach me.</p>
            <a href="mailto:davidjiang0307@gmail.com" className={styles.email}>davidjiang0307@gmail.com</a>
            <section className={styles.socials}>
                <SocialButton
                    name="GitHub"
                    address="https://github.com/DVDOSO"
                    icon="github-mark.svg"
                    width={50}
                />
                <SocialButton name="LinkedIn" address="https://www.linkedin.com/in/davidjiangdev/"
                    icon="icons8-linkedin.svg"
                    width={50}
                />
            </section>
        </section>
    )
}

export default Contact;
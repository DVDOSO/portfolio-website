import styles from './Section.module.css';
import ScrollAnimation from "react-animate-on-scroll";

function Section(props) {
    if(props.order === 'left') {
        return (
            <section className={styles.section} style={{"--ACCENT_COLOR_1": props.color}}>
                <ScrollAnimation animateIn='animate__animated animate__slideInLeft'>
                <article className={styles.text}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.caption} style={{"max-width": '75%'}}>{props.text}</p>
                    {props.buttons.map((button) => <a id='nowrap' className={styles.buttonLink} key={button.text} href={button.link}>{button.text}</a>)}
                </article>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__animated animate__slideInRight'>
                <img className={styles.figure} src={props.imgPath} alt={props.title} style={{"width": "max(" + props.width + ", 15rem)"}} />
                </ScrollAnimation>
            </section>
        )
    }
    else {
        return (
            <section id={styles.right} className={styles.section} style={{"--ACCENT_COLOR_1": props.color}}>
                <ScrollAnimation animateIn='animate__animated animate__slideInLeft'>
                <img className={styles.figure} src={props.imgPath} alt={props.title} style={{"width": "max(" + props.width + ", 15rem)"}}/>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__animated animate__slideInRight'>
                <article className={styles.text}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.caption}>{props.text}</p>
                    {props.buttons.map((button) => <a id='nowrap' className={styles.buttonLink} key={button.text} href={button.link}>{button.text}</a>)}
                </article>
                </ScrollAnimation>
            </section>
        )
    }
}

export default Section;
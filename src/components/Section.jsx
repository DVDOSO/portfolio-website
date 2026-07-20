import styles from './Section.module.css';
import Reveal from './Reveal';

function Section(props) {
    const isPortrait = typeof window !== 'undefined' && window.innerHeight > window.innerWidth;

    const text = (
        <article className={styles.text}>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.caption} style={{ "maxWidth": '75%' }}>{props.text}</p>
            {props.buttons.map((button) => (
                <a
                    id='nowrap'
                    className={styles.buttonLink}
                    key={button.text}
                    href={button.link}
                    {...(button.download ? { download: true } : {})}
                    {...(button.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                    {button.text}
                </a>
            ))}
        </article>
    );

    const figure = (
        <img
            className={styles.figure}
            src={props.imgPath}
            alt={props.title}
            style={{ "width": "max(" + props.width + ", 15rem)" }}
        />
    );

    if (isPortrait) {
        return (
            <section className={styles.section} style={{ "--ACCENT_COLOR_1": props.color }}>
                <Reveal direction="up">
                    {text}
                    {figure}
                </Reveal>
            </section>
        );
    }

    if (props.order === 'left') {
        return (
            <section className={styles.section} style={{ "--ACCENT_COLOR_1": props.color }}>
                <Reveal direction="up">{text}</Reveal>
                <Reveal direction="up" delay={120}>{figure}</Reveal>
            </section>
        );
    }

    return (
        <section id={styles.right} className={styles.section} style={{ "--ACCENT_COLOR_1": props.color }}>
            <Reveal direction="up">{figure}</Reveal>
            <Reveal direction="up" delay={120}>{text}</Reveal>
        </section>
    );
}

export default Section;

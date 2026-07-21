import styles from './Section.module.css';
import Reveal from './Reveal';

function Section(props) {
    const isPortrait = typeof window !== 'undefined' && window.innerHeight > window.innerWidth;
    const isMedia = props.figureStyle === 'media';

    const text = (
        <article className={styles.text}>
            {props.eyebrow && <p className={styles.eyebrow}>{props.eyebrow}</p>}
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.caption}>{props.text}</p>
            {props.buttons.length > 0 && (
                <div className={styles.actions}>
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
                </div>
            )}
        </article>
    );

    const figure = (
        <div className={`${styles.figureWrap} ${isMedia ? styles.media : styles.icon}`}>
            {props.tint ? (
                <span
                    className={`${styles.figure} ${styles.tinted}`}
                    role="img"
                    aria-label={props.title}
                    style={{
                        WebkitMaskImage: `url("${props.imgPath}")`,
                        maskImage: `url("${props.imgPath}")`,
                    }}
                />
            ) : (
                <img
                    className={styles.figure}
                    src={props.imgPath}
                    alt={props.title}
                    loading="lazy"
                />
            )}
        </div>
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

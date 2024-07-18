import styles from './Section.module.css';

function Section(props) {
    if(props.order === 'left') {
        return (
            <section className={styles.section} style={{"--ACCENT_COLOR_1": props.color}}>
                <article className={styles.text}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.caption}>{props.text}</p>
                    {props.buttons.map((button) => <a id='nowrap' className={styles.buttonLink} key={button.text} href={button.link}>{button.text}</a>)}
                </article>
                <img src={props.imgPath} alt={props.title} />
            </section>
        )
    }
    else {
        return (
            <section id={styles.right} className={styles.section} style={{"--ACCENT_COLOR_1": props.color}}>
                <img src={props.imgPath} alt={props.title} />
                <article className={styles.text}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.caption}>{props.text}</p>
                    {props.buttons.map((button) => <a id='nowrap' className={styles.buttonLink} key={button.text} href={button.link}>{button.text}</a>)}
                </article>
            </section>
        )
    }
}

export default Section;
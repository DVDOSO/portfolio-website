import styles from './Section.module.css';

function Section(props) {
    if(props.order === 'left') {
        return (
            <section className={styles.section} style={{"--ACCENT_COLOR_1": props.color}}>
                <article className={styles.text}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.caption} style={{"max-width": '75%'}}>{props.text}</p>
                    {props.buttons.map((button) => <a id='nowrap' className={styles.buttonLink} key={button.text} href={button.link}>{button.text}</a>)}
                </article>
                <img className={styles.figure} src={props.imgPath} alt={props.title} style={{"width": props.width}} />
            </section>
        )
    }
    else {
        return (
            <section id={styles.right} className={styles.section} style={{"--ACCENT_COLOR_1": props.color}}>
                <img className={styles.figure} src={props.imgPath} alt={props.title} style={{"width": props.width}}/>
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
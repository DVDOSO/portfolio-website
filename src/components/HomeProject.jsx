import styles from './HomeProject.module.css';

function HomeProject(props) {
    return (
        <section className={styles.container}>
            <img src={props.image} alt={props.name} className={styles.image} />
            <figcaption className={styles.caption}>
                {props.caption}
            </figcaption>
            <section className={styles.buttons}>
                {props.buttons.map((button) => <a id='nowrap' className={styles.buttonLink} key={button.text} href={button.link}>{button.text}</a>)}
            </section>
        </section>
    )
}

export default HomeProject;
import styles from './HomeProject.module.css';

function HomeProject(props) {
    return (
        <section className={styles.container}>
            {props.figureNode ? (
                <div className={styles.figure}>{props.figureNode}</div>
            ) : (
                <img src={props.image} alt={props.name} className={styles.image} />
            )}
            <h3 className={styles.title}>{props.name}</h3>
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
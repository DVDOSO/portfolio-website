import styles from './ProjectIcon.module.css';

function ProjectIcon(props) {
    return (
        <a className={styles.projectIcon} href={props.link}>
            <img src={props.icon} alt={props.name} className={styles.icon} />
            <figcaption className={styles.caption}>{props.name}</figcaption>
        </a>
    )
}

export default ProjectIcon;
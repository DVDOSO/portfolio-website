import styles from './ProjectIcon.module.css';

function ProjectIcon(props) {
    return (
        <a className={styles.projectIcon} href={props.link} target="_blank" rel="noreferrer">
            <div className={styles.iconWrapper}>
                <img src={props.icon} alt={props.name} className={styles.icon} />
            </div>
            <figcaption className={styles.caption}>{props.name}</figcaption>
        </a>
    )
}

export default ProjectIcon;

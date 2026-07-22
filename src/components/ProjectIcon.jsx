import styles from './ProjectIcon.module.css';

function ProjectIcon(props) {
    const isFeatured = props.featured;
    const className = [
        styles.projectIcon,
        isFeatured && styles.featured,
        isFeatured && props.wide && styles.wide,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <a className={className} href={props.link} target="_blank" rel="noreferrer">
            {isFeatured && <span className={styles.badge}>Featured</span>}
            <div className={styles.iconWrapper}>
                <img src={props.icon} alt={props.name} className={styles.icon} />
            </div>
            <div className={styles.body}>
                <figcaption className={styles.caption}>{props.name}</figcaption>
                {isFeatured && props.tagline && (
                    <p className={styles.tagline}>{props.tagline}</p>
                )}
                {isFeatured && props.tags && (
                    <div className={styles.tags}>
                        {props.tags.map((t) => (
                            <span key={t} className={styles.tag}>{t}</span>
                        ))}
                    </div>
                )}
            </div>
        </a>
    );
}

export default ProjectIcon;

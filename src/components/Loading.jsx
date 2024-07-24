import styles from './Loading.module.css';

function Loading(props) {
    return (
        <div className={styles.container} style={{"--ACCENT_COLOR_1": props.color}}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default Loading;
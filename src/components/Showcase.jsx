import styles from "./Showcase.module.css";

// A macOS-style browser window framing a web-app screenshot.
// `maxShotHeight` crops the screenshot (from the top) to a fixed height.
export function BrowserFrame({ src, alt, label, maxShotHeight }) {
    return (
        <div className={styles.browser}>
            <div className={styles.browserBar}>
                <span className={`${styles.dot} ${styles.red}`} />
                <span className={`${styles.dot} ${styles.yellow}`} />
                <span className={`${styles.dot} ${styles.green}`} />
                {label && <span className={styles.urlPill}>{label}</span>}
            </div>
            <img
                src={src}
                alt={alt}
                className={styles.browserShot}
                style={
                    maxShotHeight
                        ? { height: maxShotHeight, objectFit: "cover", objectPosition: "top center" }
                        : undefined
                }
                loading="lazy"
            />
        </div>
    );
}

// A diagonal, overlapping stack of screenshots.
export function StackedShots({ shots }) {
    return (
        <div className={styles.stack}>
            {shots.map((s, i) => (
                <figure key={s.src} className={styles.stackCard} style={{ zIndex: i + 1 }}>
                    <img src={s.src} alt={s.alt} className={styles.stackImg} loading="lazy" />
                    {s.label && <figcaption className={styles.stackTag}>{s.label}</figcaption>}
                </figure>
            ))}
        </div>
    );
}

// Retro Game Boy screens shown in pixel-perfect bezels.
export function GameBoyShowcase({ screens }) {
    return (
        <div className={styles.gbStage}>
            {screens.map((s) => (
                <figure key={s.src} className={styles.gbScreen}>
                    <div className={styles.gbBezel}>
                        <img
                            src={s.src}
                            alt={s.alt}
                            className={styles.gbShot}
                            loading="lazy"
                        />
                    </div>
                    <figcaption className={styles.gbLabel}>{s.label}</figcaption>
                </figure>
            ))}
        </div>
    );
}

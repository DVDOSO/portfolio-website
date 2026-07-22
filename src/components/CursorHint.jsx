import { useEffect, useState } from "react";
import styles from "./CursorHint.module.css";

/**
 * A casual, handwritten hint that sits above the avatar's head — as if the
 * avatar is saying it — with a hand-drawn line pointing down to the head,
 * nudging the visitor to move their cursor (the eyes follow it). Fine pointers
 * only (no cursor on touch).
 */
function CursorHint() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(
            window.matchMedia("(hover: hover) and (pointer: fine)").matches
        );
    }, []);

    if (!show) return null;

    return (
        <div className={styles.hint} aria-hidden="true">
            <span className={styles.text}>move your cursor!</span>
            <svg
                className={styles.arrow}
                viewBox="0 0 100 100"
                fill="none"
                preserveAspectRatio="xMidYMid meet">
                {/* hand-drawn line from the text down to the head */}
                <path className={styles.line} d="M72 20 C 74 40, 60 54, 53 74" />
            </svg>
        </div>
    );
}

export default CursorHint;

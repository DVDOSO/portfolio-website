import { useEffect, useState } from "react";
import styles from "./CursorHint.module.css";

/**
 * A small permanent hint under the avatar nudging the visitor to move their
 * cursor (revealing the interactive dot grid / eye tracking). Only shown for
 * fine pointers (no cursor on touch).
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
        <p className={styles.hint} aria-hidden="true">
            <span className={styles.dot} />
            Move your cursor
        </p>
    );
}

export default CursorHint;

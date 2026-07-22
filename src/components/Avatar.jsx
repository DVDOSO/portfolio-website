import { useEffect, useRef } from "react";
import styles from "./Avatar.module.css";

/**
 * Home page avatar whose eyes follow the cursor.
 *
 * The avatar art is a flat PNG with the eyes baked in, so we overlay two
 * redrawn eyes (white sclera + dark iris) positioned exactly over the
 * originals. The irises translate toward the cursor; the sclera clips them so
 * a pupil can never slide out of its eye. Eye centres/sizes live in the CSS
 * module as custom properties for easy tuning.
 */
function Avatar({ src = "avatar.png", width = 450, alt = "avatar", className = "" }) {
    const wrapRef = useRef(null);
    const leftIrisRef = useRef(null);
    const rightIrisRef = useRef(null);

    useEffect(() => {
        const wrap = wrapRef.current;
        const leftIris = leftIrisRef.current;
        const rightIris = rightIrisRef.current;
        if (!wrap || !leftIris || !rightIris) return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (reduceMotion) return;

        // Current mouse position and the smoothed gaze offset per eye.
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        const eyes = [
            { el: leftIris, x: 0, y: 0, tx: 0, ty: 0 },
            { el: rightIris, x: 0, y: 0, tx: 0, ty: 0 },
        ];
        let rafId = 0;

        const onMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const tick = () => {
            for (const eye of eyes) {
                const box = eye.el.parentElement.getBoundingClientRect();
                const cx = box.left + box.width / 2;
                const cy = box.top + box.height / 2;
                // Max travel scales with eye size so it works at any viewport.
                const maxX = box.width * 0.15;
                const maxY = box.height * 0.14;

                const dx = mouseX - cx;
                const dy = mouseY - cy;
                const dist = Math.hypot(dx, dy) || 1;
                // Saturate: fully deflected once the cursor is a few eye-widths away.
                const mag = Math.min(1, dist / (box.width * 6));
                const targetX = (dx / dist) * maxX * mag;
                const targetY = (dy / dist) * maxY * mag;

                // Ease toward the target for a smooth, weighty follow.
                eye.tx += (targetX - eye.tx) * 0.18;
                eye.ty += (targetY - eye.ty) * 0.18;
                eye.el.style.transform = `translate(-50%, -50%) translate(${eye.tx.toFixed(
                    2
                )}px, ${eye.ty.toFixed(2)}px)`;
            }
            rafId = requestAnimationFrame(tick);
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        rafId = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            className={`${styles.avatarWrap} ${className}`.trim()}
            ref={wrapRef}>
            <img
                className={styles.avatarImg}
                src={src}
                alt={alt}
                width={width}
                draggable={false}
            />
            <div className={`${styles.eye} ${styles.eyeLeft}`}>
                <div className={styles.iris} ref={leftIrisRef}>
                    <span className={styles.glint} />
                </div>
            </div>
            <div className={`${styles.eye} ${styles.eyeRight}`}>
                <div className={styles.iris} ref={rightIrisRef}>
                    <span className={styles.glint} />
                </div>
            </div>
        </div>
    );
}

export default Avatar;

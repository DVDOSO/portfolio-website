import { useEffect, useRef } from "react";
import styles from "./DotGrid.module.css";

/**
 * Evenly-spaced dot grid anchored to the page (scrolls with content, not fixed
 * to the viewport). Dots stay on their square lattice at a constant size;
 * those near the cursor shift colour from cyan toward magenta. Viewport-sized
 * canvas offset by scroll; pointer-events:none; static grid on touch /
 * reduced-motion.
 */
function DotGrid() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const finePointer = window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        const interactive = finePointer && !reduceMotion;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const accentStr =
            getComputedStyle(document.documentElement)
                .getPropertyValue("--ACCENT_RGB")
                .trim() || "6, 182, 212";
        // Resting colour (cyan accent) -> highlight colour under the cursor.
        const REST = accentStr.split(",").map((s) => parseFloat(s.trim()));
        const HL = [255, 20, 147]; // vibrant magenta dots pick up near the cursor

        const SPACING = 38; // gap between dots
        const R = 150; // cursor influence radius
        const R2 = R * R;
        const BASE_R = 1.4; // dot radius at rest
        const BASE_A = 0.22; // dot alpha at rest
        const GROW = 1.5; // extra radius under the cursor
        const VIBRANCY = 0.35; // extra alpha under the cursor (punchier magenta)

        let dpr = 1;
        let W = 0;
        let H = 0;

        const resize = () => {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = W * dpr;
            canvas.height = H * dpr;
            canvas.style.width = `${W}px`;
            canvas.style.height = `${H}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            draw();
        };

        // Cursor in viewport coords; off-screen until it moves.
        let mx = -99999;
        let my = -99999;
        // Per-dot glow keyed by document cell (so state survives scrolling).
        const glow = new Map();
        let lastScrollY = -1;
        let running = false;
        let rafId = 0;

        function draw() {
            const scrollY = window.scrollY;
            ctx.clearRect(0, 0, W, H);

            // Keep animating while the page is scrolling (dots reposition).
            let settled = scrollY === lastScrollY;
            lastScrollY = scrollY;

            const cols = Math.ceil(W / SPACING) + 1;
            const rowStart = Math.floor((scrollY - SPACING / 2) / SPACING) - 1;
            const rowEnd = Math.ceil((scrollY + H - SPACING / 2) / SPACING) + 1;

            for (let r = rowStart; r <= rowEnd; r++) {
                const sy = SPACING / 2 + r * SPACING - scrollY; // on-screen y
                for (let c = 0; c < cols; c++) {
                    const x = SPACING / 2 + c * SPACING;
                    const dx = mx - x;
                    const dy = my - sy;
                    const d2 = dx * dx + dy * dy;
                    const target = d2 < R2 ? 1 - Math.sqrt(d2) / R : 0;

                    const key = `${r}:${c}`;
                    let g = glow.get(key) || 0;
                    g += (target - g) * 0.2;
                    if (Math.abs(target - g) > 0.005) settled = false;
                    if (g > 0.005) glow.set(key, g);
                    else glow.delete(key);

                    // Dots expand a little and shift colour toward the highlight.
                    const rad = BASE_R + g * GROW;
                    const cr = (REST[0] + (HL[0] - REST[0]) * g) | 0;
                    const cg = (REST[1] + (HL[1] - REST[1]) * g) | 0;
                    const cb = (REST[2] + (HL[2] - REST[2]) * g) | 0;
                    const a = BASE_A + g * VIBRANCY;
                    ctx.beginPath();
                    ctx.arc(x, sy, rad, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${a})`;
                    ctx.fill();
                }
            }

            if (settled) {
                running = false;
            } else {
                rafId = requestAnimationFrame(draw);
            }
        }

        const start = () => {
            if (!running) {
                running = true;
                rafId = requestAnimationFrame(draw);
            }
        };

        const onMove = (e) => {
            mx = e.clientX;
            my = e.clientY;
            start();
        };

        const onLeave = () => {
            mx = -99999;
            my = -99999;
            start();
        };

        const onScroll = () => start();

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("scroll", onScroll, { passive: true });
        if (interactive) {
            window.addEventListener("mousemove", onMove, { passive: true });
            document.addEventListener("mouseleave", onLeave, { passive: true });
        }

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseleave", onLeave);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.dotCanvas} aria-hidden="true" />;
}

export default DotGrid;

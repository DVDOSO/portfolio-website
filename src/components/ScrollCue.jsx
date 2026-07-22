import { useEffect, useState } from "react";

/**
 * The hero "Scroll ▼" indicator. Once the visitor starts scrolling it fades
 * out over 2s (see the .scroll / .scrollHidden rules in styles.css).
 */
function ScrollCue() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 30) {
                setHidden(true);
                window.removeEventListener("scroll", onScroll);
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <p className={`scroll${hidden ? " scrollHidden" : ""}`}>Scroll ▼</p>
    );
}

export default ScrollCue;

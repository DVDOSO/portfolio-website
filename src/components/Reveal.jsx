import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

function Reveal({ children, direction = "up", delay = 0, className = "" }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (typeof IntersectionObserver === "undefined") {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${styles.reveal} ${styles[direction]} ${
                visible ? styles.visible : ""
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
}

export default Reveal;

import { useEffect, useState } from 'react';
import styles from './HexagonBackground.module.css';

const HexagonBackground = (props) => {
    const [hexagons, setHexagons] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newHexagon = {
                id: Math.random(),
                top: Math.random() * window.innerHeight,
                left: Math.random() * window.innerWidth,
                size: Math.random() * 100 + 300,
                opacity: 1,
            };
            setHexagons((hexagons) => [...hexagons, newHexagon]);
            setTimeout(() => {
                setHexagons((hexagons) =>
                    hexagons.filter((hex) => hex.id !== newHexagon.id)
                );
            }, 10000);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.hexagonContainer}>
            {hexagons.map((hex) => (
                <img
                    key={hex.id}
                    className={styles.hexagon}
                    style={{
                        top: hex.top,
                        left: hex.left,
                        width: hex.size,
                        height: hex.size,
                        opacity: hex.opacity,
                    }}
                    src={props.image}
                />
            ))}
        </div>
    );
};

export default HexagonBackground;
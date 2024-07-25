import styles from "./HexagonBackground.module.css";

const HexagonBackground = (props) => {
    return (
        <div className={!props.fixed? styles.hexagonContainer : styles.hexagonContainerFixed} style={{"--OPACITY": props.opacity}}>
            <div className={styles.left}>
                <img className={styles.hexagon1} src={props.image} alt=""
                style={{"width": '30vh', "margin-left": "-64px"}} />
                <img className={styles.hexagon1} src={props.image} alt=""
                style={{"width": '15vh', "margin-left": "240px"}} />
                <img className={styles.hexagon2} src={props.image} alt=""
                style={{"width": '20vh', "margin-left": "112px"}} />
                <img className={styles.hexagon2} src={props.image} alt=""
                style={{"width": '20vh', "margin-left": "-64px", "margin-top": "20vh"}} />
                <img className={styles.hexagon2} src={props.image} alt=""
                style={{"width": '40vh', "margin-left": "-160px", "margin-top": "40vh"}} />
                <img className={styles.hexagon1} src={props.image} alt=""
                style={{"width": '25vh', "margin-left": "-144px", "margin-top": "30vh"}} />
                <img className={styles.hexagon1} src={props.image} alt=""
                style={{"width": '20vh', "margin-left": "-96px", "margin-top": "70vh"}} />
            </div>
            <div className={styles.right}>
                <img className={styles.hexagon1} src={props.image} alt=""
                style={{"width": '30vh', "margin-left": "-64px"}} />
                <img className={styles.hexagon2} src={props.image} alt=""
                style={{"width": '20vh', "margin-left": "112px"}} />
                <img className={styles.hexagon2} src={props.image} alt=""
                style={{"width": '20vh', "margin-left": "-64px", "margin-top": "20vh"}} />
                <img className={styles.hexagon2} src={props.image} alt=""
                style={{"width": '40vh', "margin-left": "-160px", "margin-top": "40vh"}} />
                <img className={styles.hexagon1} src={props.image} alt=""
                style={{"width": '25vh', "margin-left": "-144px", "margin-top": "30vh"}} />
                <img className={styles.hexagon1} src={props.image} alt=""
                style={{"width": '20vh', "margin-left": "-96px", "margin-top": "70vh"}} />
            </div>
        </div>
    );
};

export default HexagonBackground;

import React from "react";

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "var(--secondary-color)" : "white",
        transform: props.isHeld ? "scale(1.1)" : "scale(1)"
    };
    return (
        <div
            className="die-face"
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    );
}

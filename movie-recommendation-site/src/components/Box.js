import React from "react";

export default function Box({ title, image }) {
    const navigateToCategory = () => {
        window.location.href = `/movies/${title}`;
    }

    return (
        <div className="Box" onClick={navigateToCategory}>
            <div className="box-title">{title}</div>
            <div className="box-content">
                <img src={image} alt="There Will Be Blood" className="box-image" />
            </div>
        </div>
    )
}
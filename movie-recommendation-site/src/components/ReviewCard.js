import React from "react";
import "../stylesheets/ReviewCard.css";

export default function ReviewCard({ reviewCardProps }) {
    let start, end
    for (let i = 0; i < reviewCardProps.url.length; i++) {
        if (reviewCardProps.url[i] == '/') {
            start = i + 1
            break
        }
    }
    for (let i = start; i < reviewCardProps.url.length; i++) {
        if (reviewCardProps.url[i] == '/') {
            end = i
            break
        }
    }

    const brightnessFixed = reviewCardProps.sentiment < 0.5 ? 0.5 : reviewCardProps.sentiment

    return (
        <div className="review-card" id="review-card" style={{ filter: `brightness(${parseFloat(brightnessFixed)})` }}>
            <div className="reviewer"><span className="reviewer-name">{reviewCardProps.author}</span>, {`${parseInt(parseFloat(reviewCardProps.sentiment) * 100)}`}</div>
            <div className="review-content">
                {reviewCardProps.content}
            </div>
        </div>
    )
}
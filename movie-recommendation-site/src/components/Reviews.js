import React from "react";
import ReviewCard from "./ReviewCard";
import "../stylesheets/Reviews.css";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import ProgressBar from "@ramonak/react-progress-bar";


export default function Reviews({ reviewProps }) {
    let reviewElements = []
    let length = 0
    for (let i = 0; i < reviewProps.length; i++) {
        reviewElements.push(<ReviewCard reviewCardProps={reviewProps[i]} />)
        length = length + 1;
    }

    let aggregateSentiment = 0
    for (let i = 0; i < reviewProps.length; i++) {
        aggregateSentiment = aggregateSentiment + parseFloat(reviewProps[i].sentiment)
    }
    let averageSentiment = aggregateSentiment / length

    let color
    if (averageSentiment < 0.5) {
        color = "#FF0000"
    }
    else {
        color = "#00FF00"
    }

    if (averageSentiment < 0.01) {
        averageSentiment = 0.01
    }

    return (
        <div className="reviews">
            <div className="score">
                {length !== 0 && "Reviews"}
            </div>
            <div className="sentiment">
                {length !== 0 && <ProgressBar completed={averageSentiment * 100} bgColor={color} height={"30px"} labelSize={"20px"} />}
            </div>
            <div className="review-cards">
                {reviewElements}
            </div>
        </div>
    )
}
import React from "react";
import "../stylesheets/ProfileMainContent.css";

export default function ProfileMainContent({ director, title, synopsis, posterPath }) {
    try {
        const imgsource = "https://image.tmdb.org/t/p/original" + posterPath
        return (
            <div className="profilemaincontent">
                <div className="maincontent-left">
                    {director && <div className="maincontent-director">{director}</div>}
                    <div className="maincontent-title">{title}</div>
                    {synopsis && <div className="maincontent-synopsis">
                        <p>{synopsis}</p>
                    </div>}
                </div>
                {imgsource && <div className="maincontent-right">
                    <img className="maincontent-poster" src={imgsource} alt="there will be blood" />
                </div>}
            </div>
        )
    } catch (e) {
        console.log(e)
    }

}
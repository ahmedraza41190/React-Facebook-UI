import React, { useState } from "react";
import "./like-button.css"

function App() {
    const [likeCount, setLikeCount] = useState(99);

    const [activeBtn, setActiveBtn] = useState("none");

    const handleLikeClick = () => {
        if (activeBtn === "none") {
            setLikeCount(likeCount + 1);
            setActiveBtn("like");
            return;
        }

        if (activeBtn === 'like') {
            setLikeCount(likeCount - 1);
            setActiveBtn("none");
            return;
        }

        if (activeBtn === "dislike") {
            setLikeCount(likeCount + 1);
            setActiveBtn("like");
        }
    };

    // --------------------------onClick change the like logo color---------------

    const [isActive, setIsActive] = useState(false);

    const handleClicklbtn = () => {
        // 👇️ toggle
        setIsActive(current => !current);   

        // 👇️ or set to true

        if (activeBtn === "none") {
            setIsActive(true);
            return;
        }

        if (activeBtn === 'like') {
            setIsActive(false);
            return;
        }

        if (activeBtn === "dislike") {
            setIsActive(true);
        }
    };

    return (
        <div className="container">
            <div className="btn-container">
                <button
                    className={`btn ${activeBtn === 'like' ? 'like-active' : ''}`}
                    onClick={handleLikeClick}
                >
                    <svg className={`lbtn ${activeBtn === 'like' ? 'like-active' : ''}`}
                        style={{
                            fill: isActive ? 'rgb(32, 120, 244)' : '',
                        }} onClick={handleClicklbtn} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" /></svg>
                    Like {likeCount}K
                </button>
            </div>
        </div>
    );
};

export default App;
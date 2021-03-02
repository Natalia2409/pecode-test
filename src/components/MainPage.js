import React from "react";
import welcome from "../img/welcome.png";
import Fade from 'react-reveal/Fade';

function MainPage() {
    return (
        <div className="main_page">
            <Fade left>
                <div>
                    <h1>WELCOME</h1>
                    <img src={welcome} alt="welcome" />
                </div>
            </Fade>
        </div>
    )
}

export default MainPage;

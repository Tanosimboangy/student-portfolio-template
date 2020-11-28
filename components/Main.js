import React, { Fragment } from 'react'
import Blog from "../pages/Blog";
import Experiences from "../pages/Experiences";
import Hobbies from "../pages/Hobbies";
import Progress from "../pages/Progress";

function Main() {
    return (
        <main className="main">
            <div className="first_section">
                <div className="first_content--firstsection">
                    <Progress />
                    <Hobbies />
                </div>
                <div className="second_content--firstsection">
                    <Blog />
                    <Experiences />
                </div>
            </div>
        </main>
    )
}

export default Main

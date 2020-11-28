import React from 'react'
import Blog from "../elements/Blog";
import Experiences from "../elements/Experiences";
import Hobbies from "../elements/Hobbies";
import Progress from "../elements/Progress";
import Demo from "../elements/Demo";
import Projects from "../elements/Projexts";

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
            <div>
                <Projects />
            </div>
            <div className="demo_section">
                <Demo />
            </div>
        </main>
    )
}

export default Main

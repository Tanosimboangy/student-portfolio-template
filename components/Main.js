import React from 'react'
import Blog from "../elements/Blog";
import Progress from "../elements/Progress";
import Masthead from "../elements/Masthead";
import Demo from "../elements/Demo";

function Main() {
    return (
        <main className="main">
            <Masthead />
            <div className="first_section">
                <Progress />
                <Blog />
            </div>
            <div className="demo_section">
                <Demo />
            </div>
        </main>
    )
}

export default Main

import React from 'react'
import Blog from "../elements/Blog";
import Progress from "../elements/Progress";
import Demo from "../elements/Demo";

function Main() {
    return (
        <main className="main">
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

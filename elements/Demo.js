import React from 'react'
import data from "../data.json";

function Demo() {
    return (
        <div>
            <div>
                <h2>Projects (3)</h2>
                <ul className="projects_options">
                    <li>
                        <button>React</button>
                    </li>
                    <li>
                        <button>Vue</button>
                    </li>
                    <li>
                        <button>Responsive</button>
                    </li>
                </ul>
            </div>
            {data.map(item => {
                return (
                    <div className="responsive_blog" key={item.id}>
                        <img className="responsive_image" src="" alt="receipe_blog"/>
                        <ul className="three_basics">
                            <li><a href={item.html}>HTML</a></li>
                            <li><a href={item.css}>CSS</a></li>
                            <li><a href={item.javascript}>JAVASCRIPT</a></li>
                        </ul>
                        <h3 className="heading">{item.title}</h3>
                        <p>{item.description}</p>
                        <ul className="buttons_container">
                            <li>
                                <button type="demo_button">{item.demo}</button>
                            </li>
                            <li>
                                <button type="code_button">{item.code}</button>
                            </li>
                        </ul>
                    </div>
                )
            } )}
        </div>
    )
}

export default Demo

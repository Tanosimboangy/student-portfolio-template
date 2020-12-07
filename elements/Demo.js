import React from 'react'
import data from "../data.json";

function Demo() {

        function filteringData(e) {
            const newItemm = data.filter(item => item.type === e.target.value)
            console.log(newItemm);
            return (
                <div className="responsive_blog" key={newItemm.id}>
                    <img className="responsive_image" src="" alt="receipe_blog"/>
                    <ul className="three_basics">
                        <li><a href={newItemm.html}>HTML</a></li>
                        <li><a href={newItemm.css}>CSS</a></li>
                        <li><a href={newItemm.javascript}>JAVASCRIPT</a></li>
                    </ul>
                    <h3 className="heading">{newItemm.title}</h3>
                    <p>{newItemm.description}</p>
                    <ul className="buttons_container">
                        <li>
                            <button type="demo_button">{newItemm.demo}</button>
                        </li>
                        <li>
                            <button type="code_button">{newItemm.code}</button>
                        </li>
                    </ul>
                </div>
            )
        }
    return (
        <div>
            <div>
                <h2>Projects (3)</h2>
                <ul className="projects_options">
                    <li>
                        <button 
                            value="react"
                            onClick={filteringData}
                        >React</button>
                    </li>
                    <li>
                        <button 
                            value="responsive"
                            onClick={filteringData}
                        >Responsive</button>
                    </li>
                    <li>
                        <button 
                            value="html&css"
                            onClick={filteringData}
                        >HTML and CSS</button>
                    </li>
                </ul>
            </div>
            <div>
                filteringData()
            </div>
        </div>
    )
}

export default Demo

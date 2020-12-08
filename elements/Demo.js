import React, {useState} from 'react';
import data from "../data.json";

function Demo() {
    const [newData, setNewData] = useState([]);

    function filteringData(e) {
        const newItem = data.filter(item => item.type === e.target.value)
        setNewData(newItem)
    }
    
    function all() {
        const ls = data.map(item => {
            return (
                <ul>
                    <li>
                        {item.title}
                        {item.description}
                    </li>
                </ul>
            )
        })
        console.log(ls);
    }

    return (
        <div>
            <div>
                <h2>Projects (3)</h2>
                <ul className="projects_options">
                    <li><button value="react" onClick={filteringData}>React</button></li>
                    <li><button value="responsive" onClick={filteringData}>Responsive</button></li>
                    <li><button value="html&css"  onClick={filteringData}>HTML and CSS</button></li>
                    <li><button onClick={all}>All</button></li>
                </ul>
            </div>
            <div>
                {newData.map(item => {
                    console.log(item);
                    return (
                        <div className="responsive_blog" key={item.id}>
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
                })}
            </div>
        </div>
    )
}

export default Demo

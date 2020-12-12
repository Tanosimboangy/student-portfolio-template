import React, {useState} from 'react';
import data from "../data.json";

function Demo() {
    const [newData, setNewData] = useState([]);

    function filteringData(e) {
        const newItem = data.filter(item => item.type === e.target.value)
        setNewData(newItem)
    }

    function showingAll(e) {
        const allItem = data.map(item => item)
        setNewData(allItem)
    }

    return (
        <>
            <div className="buttons_lists">
                <h2>Projects</h2>
                <p>You can click one of these buttons if you want to spend some time to look at some of my projects. Please have a great time.</p>
                <ul className="projects_options">
                    <li><button value="react" onClick={filteringData}>React</button></li>
                    <li><button value="responsive" onClick={filteringData}>Responsive</button></li>
                    <li><button value="vanilla"  onClick={filteringData}>Vanilla</button></li>
                    <li><button onClick={showingAll}>All</button></li>
                </ul>
            </div>
            <div className="wrapper">
                {newData.map(item => {
                    console.log(item);
                    return (
                        <div className="container" key={item.id}>
                            <img src={item.img} alt={`this image is ${item.title}`}/>
                            <ul className="three_basics">
                                <li><a href={item.html}>HTML</a></li>
                                <li><a href={item.css}>CSS</a></li>
                                <li><a href={item.javascript}>JAVASCRIPT</a></li>
                            </ul>
                            <h3 className="project_heading">{item.title}</h3>
                            <p className="project_description">{item.description}</p>
                            <ul className="buttons_container">
                                <li><button><a className="demo_button" href={item.demo}>Demo</a></button></li>
                                <li><button><a className="code_button" href={item.code}>Code</a></button></li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Demo

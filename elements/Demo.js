import React, {useState} from 'react';
import data from "../data.json";

function Demo() {
    const [newData, setNewData] = useState([]);

    function filteringData(e) {
        const newItem = data.filter(item => item.type === e.target.value)
        setNewData(newItem)
    }
    
    // function all() {
    //     const ls = data.map(item => {
    //         return (
    //             <ul>
    //                 <li>
    //                     {item.title}
    //                     {item.description}
    //                 </li>
    //             </ul>
    //         )
    //     })
    // }

    return (
        <>
            <div>
                <h2>Projects (3)</h2>
                <ul className="projects_options">
                    <li><button value="react" onClick={filteringData}>React</button></li>
                    <li><button value="responsive" onClick={filteringData}>Responsive</button></li>
                    <li><button value="html&css"  onClick={filteringData}>HTML and CSS</button></li>
                    {/* <li><button onClick={all}>All</button></li> */}
                </ul>
            </div>
            <div>
                {newData.map(item => {
                    console.log(item);
                    return (
                        <div className="container" key={item.id}>
                            {/* <img src={item.img} alt={`this image is ${item.title}`}/> */}
                            <ul className="three_basics">
                                <li><a href={item.html}>HTML</a></li>
                                <li><a href={item.css}>CSS</a></li>
                                <li><a href={item.javascript}>JAVASCRIPT</a></li>
                            </ul>
                            <h3 className="project_heading">{item.title}</h3>
                            <p className="project_description">{item.description}</p>
                            <ul className="buttons_container">
                                <li><a className="demo_button" href={item.demo}>Demo</a></li>
                                <li><a className="code_button" href={item.code}>Code</a></li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Demo

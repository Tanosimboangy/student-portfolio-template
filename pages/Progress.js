import React from 'react'

function Progress() {
    return (
        <div className="progress_container">
            <h2 className="progress_heading">FRONT END</h2>
            <ul className="progress_lists">
                <li>
                    <label htmlFor="react">React: </label>
                    <progress id="react" max="100" value="50"> 50% </progress>
                </li>
                <li>
                    <label htmlFor="javascript">Javascript: </label>
                    <progress id="javascript" max="100" value="70"> 70% </progress>
                </li>
                <li>
                    <label htmlFor="css">CSS: </label>
                    <progress id="css" max="100" value="80"> 80% </progress>
                </li>
                <li>
                    <label htmlFor="vue">Vue: </label>
                    <progress id="vue" max="100" value="40"> 40% </progress>
                </li>
                <li>
                    <label htmlFor="redux">Redux: </label>
                    <progress id="redux" max="100" value="10"> 10% </progress>
                </li>
                <li>
                    <label htmlFor="react_native">React Native: </label>
                    <progress id="react_native" max="100" value="20"> 20% </progress>
                </li>
            </ul>
        </div>
    )
}

export default Progress

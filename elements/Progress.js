import React from 'react'

function Progress() {
    return (
        <div className="progress_container">
            <h2 className="progress_heading">FRONT END</h2>
            <ul className="progress_lists">
                <li>
                    <ul className="progress_elements">
                        <li><label htmlFor="react">React: </label></li>
                        <li><progress className="progress" id="react" max="100" value="50"> 50% </progress></li>
                    </ul>
                </li>
                <li>
                    <ul className="progress_elements">
                        <li><label htmlFor="javascript">Javascript: </label></li>
                        <li><progress className="progress" id="javascript" max="100" value="40"> 40% </progress></li>
                    </ul>
                </li>
                <li>
                    <ul className="progress_elements">
                        <li><label htmlFor="css">CSS: </label></li>
                        <li><progress className="progress" id="css" max="100" value="80"> 80% </progress></li>
                    </ul>
                </li>
                <li>
                    <ul className="progress_elements">
                        <li><label htmlFor="vue">Vue: </label></li>
                        <li><progress className="progress" id="vue" max="100" value="80"> 80% </progress></li>
                    </ul>
                </li>
                <li>
                    <ul className="progress_elements">
                        <li><label htmlFor="redux">Redux: </label></li>
                        <li><progress className="progress" id="redux" max="100" value="10"> 10% </progress></li>
                    </ul>
                </li>
                <li>
                    <ul className="progress_elements">
                        <li><label htmlFor="react_native">React Native: </label></li>
                        <li><progress className="progress" id="react_native" max="100" value="20"> 20% </progress></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Progress

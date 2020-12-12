import React from 'react'
import clean_code from '../img/clean_code.jpg'

function Blog() {
    return (
        <div className="blog_section">
            <article>
                <ul className="blog_heading">
                    <li>
                        <ul>
                            <li>
                                <h2>Coding</h2>
                                <h3>Organize your CODE</h3>
                            </li>
                            <li><img className="best_design" src={clean_code} alt="best design"/></li>
                        </ul>
                    </li>
                    <li className="blog_paragraph--lists">
                        <p>If you want to write a good code, make it simple as possible to understand as you can and make it clean.</p>
                    </li>
                    <li><a href="https://www.geeksforgeeks.org/7-tips-to-write-clean-and-better-code-in-2020/">More info</a></li>
                </ul>
            </article>
        </div>
    )
}

export default Blog

import React from 'react'
import GamingBrowser from '../img/GamingBrowser.png'

function Blog() {
    return (
        <div className="blog_section">
            <article>
                <ul className="blog_heading">
                    <li>
                        <ul>
                            <li>
                                <h2>Blog</h2>
                                <h3>Organize your CODE</h3>
                            </li>
                            <li><img className="best_design" src={GamingBrowser} alt="best design"/></li>
                        </ul>
                    </li>
                    <li className="blog_paragraph--lists">
                        <p>In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.</p>
                    </li>
                    <li>
                        <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </li>
                    <li><a href="https://devchallenges.io/">dev.to</a></li>
                </ul>
            </article>
        </div>
    )
}

export default Blog

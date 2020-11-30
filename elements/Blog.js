import React from 'react'

function Blog() {
    return (
        <div className="blog_section">
            <article>
                <ul className="blog_heading">
                    <li>
                        <h2>Blog</h2>
                        <h3>How to organize your CSS</h3>
                    </li>
                    <li>
                        <img src="" alt="best design"/>
                    </li>
                </ul>
                <ul className="blog_paragraph--lists">
                    <li>
                        <p>
                            In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.  
                        </p>
                    </li>
                    <li>
                        <p>
                            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
                        </p>
                    </li>
                </ul>
                <a href="https://devchallenges.io/">dev.to</a>
            </article>
        </div>
    )
}

export default Blog

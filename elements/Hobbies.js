import React from 'react'
import GamingBrowser from '../img/GamingBrowser.png'
import readingBook from '../img/reading-book.jpg'
import listening from '../img/listening.jpg'

function Hobbies() {
    return (
        <div className="hobbies">
            <h2 className="hobbies_heading">Hobbies</h2>
            <article className="music_article">
                <img src={GamingBrowser} alt="music"/>
                <h3>Game</h3>
                <p>Have fun in your life.</p>
            </article>
            <article className="reading_article">
                <img src={readingBook} alt="reading"/>
                <h3>Reading</h3>
                <p>Let’s be reasonable and add an eighth day to the week that is devoted exclusively to reading.</p>
            </article>
            <article className="listening_article">
                <img src={listening} alt="listening"/>
                <h3>Listening</h3>
                <p>Give yourself some time for listening.</p>
            </article>
        </div>
    )
}

export default Hobbies

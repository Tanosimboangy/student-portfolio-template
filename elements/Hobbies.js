import React from 'react'
import game from '../img/game.webp'

function Hobbies() {
    return (
        <div className="hobbies">
            <h2 className="hobbies_heading">Hobbies</h2>
            <article className="music_article">
                <img src={game} alt="music"/>
                <h3>Game</h3>
                <p>Have fun in your life.</p>
            </article>
            <article className="cooking_article">
                <img src="" alt="cooking"/>
                <h3>washing</h3>
                <p>Take care of yourself very well.</p>
            </article>
            <article className="biking_article">
                <img src="" alt="biking"/>
                <h3>Running</h3>
                <p>Enjoy your time for practicing sport, as well as keeping yoursel healthy.</p>
            </article>
        </div>
    )
}

export default Hobbies

import React from 'react'
import jacquit from "../img/jacquit.jpg";

function Header() {
    return (
        <header className="header_container">
            <div className="header_profile">
                <img src={jacquit} alt="This is my image"/>
            </div>
            <div className="header_details">
                <div className="personal_details">
                    <ul className="personal_description">
                        <li>
                            <h2>Francois Jacquit</h2>
                        </li>
                        <li>
                            <p>Front-end developer</p>
                        </li>
                    </ul>
                    <ul className="personal_contact">
                        <li className="email_contact">
                            <a href ="mailto:rak.hajasper@mail.com?">Jacquit@gmail.com</a>
                        </li>
                        <li className="phonenumber_contact">
                            <p>(+261)344605298</p>
                        </li>
                    </ul>
                </div>
                <div className="personal_motivation"> 
                    <p>
                        Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header

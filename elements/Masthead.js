import React from 'react'
import jacquit from "../img/jacquit.jpg";

function Masthead() {
    return (
        <header className="masthead_container">
            <div className="masthead_profile">
                <img src={jacquit} alt="This is my image"/>
            </div>
            <div className="masthead_details">
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
                            <a href ="mailto:rak.hajasper@mail.com?">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="orange" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> Jacquit@gmail.com
                            </a>
                        </li>
                        <li className="phonenumber_contact">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="orange" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>(+261) 344605298
                            </p>
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

export default Masthead

import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer_container">
                <h3>Portfolio</h3>
                <p>To sum up all about this website, I would like to thank you for allocating some of your time to read through this page</p>
                <div className="wrapper_footer">
                    <div >
                        <nav className="footer_navigation">
                            <ul>
                                <li className="footer_navigation--email">
                                    <a className="footer_navigation--email_link" href="mailto:rak.hajasper@mail.com?">Email<br />
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="blue" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h4>More Inforamtion</h4>
                        <p>Should you need more inforamtion, please let me through these links!</p>
                        <ul className="footer_moreInfo">
                            <li className="footer_links">
                                
                            </li>
                            <li>
                                <ul>
                                    <li>
                                        <img src="./img/jacquit (2).jpg" alt="this is Jacquit" />
                                    </li>
                                    <li>
                                        <ul>
                                            <li>Built by Jacquit</li>
                                            <li>Created in 2020</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <ul className="last_footer_items">
                        <li>Created by Jacquit</li>
                        <li>© Jacquit, 2020. All rights reserved.</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

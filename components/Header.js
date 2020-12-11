import React from "react";

export default function Header() {
    return (
		<header className="header">
			<div className="container">
				<div className="header_container">
					<h1 className="header_logo">My Portfolio</h1>
					<svg xmlns="http://www.w3.org/2000/svg" height="30" fill="white" viewBox="0 0 24 24" width="30"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
					<input type="checkbox" />
					<nav className="header_navigation">
						<ul>
							<li className="header_navigation--blog">
								<a className="header_navigation--blog_link" href="blog">Blog
									<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" fill="blue" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M17.5,4.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65c0,0.65,0.73,0.45,0.75,0.45 C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5c1.65,0,3.35,0.3,4.75,1.05 C22.66,21.26,23,20.86,23,20.6V6C21.51,4.88,19.37,4.5,17.5,4.5z M21,18.5c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8 c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"/></g></g></g></svg>
								</a>
							</li>
							<li className="header_navigation--contact">
								<a className="header_navigation--contact_link" href="/contact">Contact
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="blue" width="24"><path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/><path d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"/></svg>
								</a>
							</li>
							<li className="header_navigation--design">
								<a className="header_navigation--design_link" href="/design">Design
								<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="blue" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
    )
}

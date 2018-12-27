import React from 'react';
import './navbar.css';
export default class Navbar extends React.Component {
	render() {
		return (
			<nav data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="100"className={this.props.class}>
				<ul>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#work">Work</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li>
						<a href="#resume">Resume</a>
					</li>
				</ul>
			</nav>
		);
	}
}

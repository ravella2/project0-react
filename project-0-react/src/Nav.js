import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return(
            <nav>
            <ul class="navlist">
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contactform">Contact Me</a></li>
                </ul>
                <a href="#" class="hamburger"><i class="fa fa-bars" aria-hidden="true"></i></a>
            </nav>
        )
    }
}

export default Nav;
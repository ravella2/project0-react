import React, { Component } from 'react';
import './App.css';
import Nav from "./Nav.js"
import AboutMe from "./AboutMe.js"
import Portfolio from './Portfolio.js'
import Contact from './Contact.js'
import Testimonials from './Testimonials'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div class="box">
              <h1>I'm Rachele Avella</h1>
              <h2>a Web Development Student</h2>
          </div>
        </header>
        <Nav />
        <AboutMe />
        <Portfolio />
        <Testimonials />
        <Contact />
        <footer id="social-media">
          <h3>Follow me on social media: </h3>
          <a href="https://twitter.com/rachelecodes" class="fa fa-twitter"></a>
          <a href="https://www.linkedin.com/in/racheleavella" class="fa fa-linkedin"></a>
        </footer>
      </div>
    );
  }
}

export default App;

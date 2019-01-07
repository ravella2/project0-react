import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <section id="contact">
                <h2>Get in Touch!</h2>
                <form>
                    <h2><a id="contactform">Send me an e-mail</a></h2>
                    <div>
                        <input type="text" placeholder="First Name" />
                    </div>
                    <div>
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div>
                        <textarea id="msg"></textarea>
                    </div>
                    <div class="btn">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default Contact;
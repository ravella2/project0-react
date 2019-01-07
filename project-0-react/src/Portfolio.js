import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return(
            <section id="portfolio">
                <h2><a id="pfolio">Portfolio</a></h2>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="./imgs/monument-blog.png" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./imgs/candy-store.png" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./imgs/poke-api.png" alt="Third slide" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;
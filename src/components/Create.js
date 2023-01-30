import React, { Fragment } from 'react'
import { Carousel } from 'react-responsive-carousel';
import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 2
}
const Create = () => {
  return (
    <Fragment>

    <section className="create">
    <div className="content">
        <h1>We Create Entirely Unique and <br/> Unforgettable Beverages For<br/>Discerning Clients  </h1>
    </div>
    
</section>

    <div className="slide">
        <Flickity  options={flickityOptions}>
            <div className="box boxer">
                <img src="img/pexels-arina-krasnikova-7376772.jpg" alt=""/>
            </div>
            <div className="box boxer">
                <img src="img/pexels-alleksana-4051402.jpg" alt=""/>
            </div>
            <div className="box boxer">
                <img src="img/pexels-alleksana-4051220.jpg" alt=""/>
            </div>
            <div className="box boxer">
                <img src="img/pexels-alleksana-4051260.jpg" alt=""/>
            </div>

        </Flickity>
    </div>


    </Fragment>
  )
}

export default Create
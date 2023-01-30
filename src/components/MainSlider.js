import React from 'react'
 // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MainSlider = () => {
  return (
    <>
     {/* <div className="main-carousel"> */}
     <Carousel>
<div className="back back-1">
    <div className="content">
        <h1>Better taste,</h1>
        <h1>less waste</h1>
        <p>Introducing Cocktails - a Luxury spin on boxed wine that's<br/> eco-friendly & delicious</p>

        <div className="link">
            <button>Shop Now</button>

        </div>
    </div>
</div>
<div className="back back-2">
    <div className="content">
        <h1>Better Wine,</h1>
        <h1>Fine Dine</h1>
        <p>Introducing Cocktails - a Luxury spin on boxed wine that's<br/> eco-friendly & delicious</p>

        <div className="link">
            <button>Shop Now</button>

        </div>
    </div>
</div>
     </Carousel>



{/* // </div> */}
    </>
   
  )
}

export default MainSlider
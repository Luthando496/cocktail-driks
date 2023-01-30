import React from 'react'

const Boxes = () => {
  return (
    <section className="boxes">
    <div className="container">

        <div className="box">
            <img src="img/pexels-helena-lopes-696215.jpg" alt="kjkjk"/>
            <div className="overlay"></div>
            <div className="content">
                <h1>Champagne</h1>
            </div>

        </div>
        <div className="box">
            <img src="img/pexels-arina-krasnikova-7376772.jpg" alt="kkk"/>
            <div className="overlay"></div>
            <div className="content">
                <h1>Lemon Martini</h1>
            </div>
        </div>
        <div className="box">
            <img src="img/pexels-sabel-blanco-1835743.jpg" alt="b"/>
            <div className="overlay"></div>
            <div className="content">
                <h1>Sabel-Blanco</h1>
            </div>
        </div>
    </div>
</section>
  )
}

export default Boxes
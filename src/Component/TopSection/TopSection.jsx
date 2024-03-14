import React from 'react'
import './TopSection.css'

function TopSection() {
    return (
        <section id="top" className='topSection-width'>
            <div className="d-flex align-items-center">
                <div id="left">
                    <img className="img-fluid " src="https://themewagon.gitlab.io/restaurant/assets/img/food/plate.png" alt="img" />
                </div>
                <div id="right">
                    <h1>The Spectacle <span style={{ fontWeight: 'bold' }}>Before Us <br /> Was Indeed</span> Sublime.</h1>
                    <p style={{ color: 'gray' }}>Apparently, we had reached a great height in the atmosphere, for the sky was a dead
                        black, and which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                    <button className="btn btn-warning rounded px-4" id='btn1'>Order online</button>
                    <button className="btn btn-light border border-warning text-dark rounded px-4 mx-3 " id="btn1">Our Location</button>
                </div>
            </div>
        </section>
    )
}

export default TopSection
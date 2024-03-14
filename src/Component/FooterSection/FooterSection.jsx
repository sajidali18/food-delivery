import React from 'react'
import './FooterSection.css'

function FooterSection() {
    return (
        <footer className="bg-dark footer footer-width">
            <div className="container">
                <div className="row align-items-center flex-sm-nowrap">
                    <div className="col">
                        <img className="mb-1" width={95} src="https://themewagon.gitlab.io/restaurant/assets/img/food/pngfood2.png" alt />
                    </div>
                    <div className="col mb-3 mx-4">
                        <h3 className="text-white my-3 fs-lg-2 fs-1 mb-4 ">Want To Taste Our Food?</h3>
                        <button className="btn btn-danger" type="button">order</button>
                    </div>
                    <div className="col mb-3 mx-4 footer-nav">
                        <h5>About</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">About</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">services</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Careers</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Hire Us</a></li>
                        </ul>
                    </div>
                    <div className="col mb-3 mx-4">
                        <h5>Resources</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Term</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Help</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Privacy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterSection
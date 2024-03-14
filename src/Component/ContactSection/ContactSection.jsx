import React from 'react'
import './ContactSection.css'

function ContactSection() {
    return (
        <section className="bg-light contact-width">
            <div className="container">
                <div className="row" id="location">
                    <div className="col text-center mb-lg-6 mb-5 mt-7 mt-lg-0">
                        <div className="overflow-hidden">
                            <p className="fs-2 text-1000 mb-1 fw-bold" style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>Location
                                &amp; Timing</p>
                            <p className="fs-2 text-1000 mb-1 fw-bold">Contact with us
                            </p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="card shadow-sm h-100">
                            <div className="card-body pl-5">
                                <div className="media mt-4">
                                    <div className="media" >
                                        <p className="text-secondary font-monospace fs-4 logo"><i className="fa-solid fa-location-dot" />Av. Paz Soldán
                                            290,
                                            San<br />Isidro, Lima 27 - Peru</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-body"><i className="fa-solid fa-phone" /><a className="text-600 text-secondary font-monospace fs-4 logo" href="tel:12345678910">+511
                                        442-2777</a></div>
                                </div>
                                <div className="media mt-2">
                                    <div className="media-body "><i className="fa-solid fa-envelope" /><a className="text-600 text-secondary font-monospace fs-4 logo" href="mailto:mail@restaurantpro.com">mail@restaurantpro.com</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="card shadow-sm h-100">
                            <div className="card-body pl-5">
                                <p className="text-danger fw-bold fs-3">Hours of service</p>
                                <p className="mb-0 text-1000 font-monospace text-secondary fs-4">Monday to Saturday</p>
                                <p className="text-600 font-monospace text-secondary fs-4">1:00 pm - 3:00 pm and<br />7:00 pm - 11:00 pm</p>
                                <p className="mb-0 text-1000 font-monospace text-secondary fs-4">Sunday</p>
                                <p className="font-monospace text-secondary fs-4">12:30 pm - 3:30 pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 mt-lg-0 overflow-hidden">
                        <div className="card shadow-sm h-100 overflow-hidden"><img className="position-absolute rounded-top r-0 d-none d-md-block d-lg-none d-xl-block contact-img" src="https://themewagon.gitlab.io/restaurant/assets/img/food/kisspng-soup.png" alt width={120} style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }} />
                            <div className="card-body pl-5 mt-3">
                                <p className="mb-0 fw-bold text-secondary fs-3">Telephone support:</p>
                                <p className="text-600 font-monospace text-secondary fs-4">Monday to Saturday from<br />9:00 am to 9:00 pm</p>
                                <button className="btn btn-danger mt-3 fw-bold" type="button" data-toggle="modal" data-target="#reservation"><span className="d-none d-sm-inline d-lg-none text-light d-xl-inline fw-bold mr-2">Make
                                    a</span> Reservation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactSection
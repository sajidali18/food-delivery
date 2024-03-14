import React from 'react'
import './CategorySection.css'

function CategorySection() {
    return (
        <section className="bg-light category category-container" >
            <div className="container">
                <div className="row flex-column align-items-center mt-5">
                    <div className="col-xl-8 col-xxl-5 col-lg-10 text-center ml-xxl-auto mt-5  w-75">
                        <div className="overflow-hidden">
                            <p className="fs-2 text-1000 mb-1 font-weight-bold" style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>
                                Catering</p>
                            <h2 className="fs-1 fs-sm-4 font-weight-bold" style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)', fontWeight: 650 }}>We Manage
                                Your Events</h2>
                        </div>
                        <p className="mt-4 font-monospace fs-4 w-100" style={{ filter: 'blur(0px)', opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)', color: '#5E6E82' }}>
                            Allow our Chef to
                            deliver the perfect private dinner or cocktail party experience in your home; or let us simply add a little
                            extra flavor to your next office meeting, boat trip, or beach picnic. By partnering with our sibling
                            location Rosewater Wine &amp; Spirits, we can offer a full array of bar services and beverage selections.
                            Email us to learn more.</p>
                    </div>
                    <div className="col-xxl-3 col-xl-7 col-lg-8 col-10 text-center mt-4 mt-xxl-0 burger">
                        <div className="card bg-light shadow-lg ml-xxl-6 mt-5" style={{ filter: 'blur(0px)', opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>
                            <div className="card-body ">
                                <div className="row flex flex-sm-nowrap classimg">
                                    <div className="col-xl-6 col-xxl-12"><img className="img-fluid rounded h-75" src="https://themewagon.gitlab.io/restaurant/assets/img/food/pancake_PNG94.png" alt /></div>
                                    <div className="col-xl-6 col-xxl-12 info">
                                        <p className="font-weight-bold  fs-4">We Cater in Weddings,<br />Corporate Functions<br />and Events</p><a className="btn btn-warning mb-3 px-5 py-2 mt-5" href="#contact">hire us Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CategorySection
import React from 'react'
import './DetailSection.css'

function DetailSection() {
    return (
        <section className="detail detail-width">
            <div className="container">
                <div className="row">
                    <div className="col mt-4">
                        <div className="fancy-tab-bar d-flex justify-content-center">
                            <div className="fancy-tab overflow-hidden mx-5">
                                <a href="#" className="text-dark"><i className="fa-solid fa-mug-saucer fs-3 mx-5" /><br />
                                    <span className="fs-2 text-dark fw-medium">Breakfast</span>
                                </a>
                            </div>
                            <div className="fancy-tab overflow-hidden mx-3">
                                <a href="#" className="text-dark"><i className="fa-solid fa-utensils fs-3 mx-5" /><br />
                                    <span className="fs-2 text-dark fw-medium">Dinner</span>
                                </a>
                            </div>
                            <div className="fancy-tab overflow-hidden mx-3">
                                <a href="#" className="text-dark"><i className="fa-solid fa-cookie-bite fs-3 mx-5" /><br />
                                    <span className="fs-2 text-dark fw-medium">Deserts</span>
                                </a>
                            </div>
                            <div className="fancy-tab overflow-hidden mx-3">
                                <a href="#" className="text-dark"><i className="fa-solid fa-wine-bottle fs-3 mx-4" style={{ textDecoration: 'none' }} /><br />
                                    <span className="fs-2 text-dark fw-medium">Drink</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="fancy-tab-contents bg-light rounded-soft">
                        <div className="fancy-tab-content active mt-5">
                            <div className="row no-gutters overflow-hidden">
                                <div className="col">
                                    <div className="row py-8 rounded-soft no-gutters">
                                        <div className="col-lg-4 border-lg-right border-2x border-300 px-5">
                                            <div className="row no-gutters">
                                                <div className="col d-flex justify-content-between">
                                                    <h6 className="fs-3 font-weight-bold text-uppercase text-black mr-4">Breakfast Bowl</h6>
                                                    <p className="text-danger fs-5 font-weight-bold mb-0" style={{ fontWeight: 650 }}>$8.50</p>
                                                </div>
                                                <p className="w-xl-75 text-600 mb-4 text-secondary">Black Bean Cake, Greens, Tomato &amp; Avocado Pico
                                                    drizzled with
                                                    Lime Cream (Add egg $1)</p>
                                            </div>
                                            <div className="row no-gutters">
                                                <div className="col d-flex justify-content-between">
                                                    <h6 className="fs-3 font-weight-bold text-uppercase text-black mr-4">EGG SANDWICH</h6>
                                                    <p className="text-danger fs-5 font-weight-bold mb-0" style={{ fontWeight: 650 }}>$7.50</p>
                                                </div>
                                                <p className="w-xl-75 text-600 mb-4 text-secondary">Everything Bagel with Cream Cheese, Bacon, Tomato,
                                                    Red Onion,
                                                    Basil Pesto, Arugula</p>
                                            </div>
                                            <div className="row no-gutters">
                                                <div className="col d-flex justify-content-between">
                                                    <h6 className="fs-3 font-weight-bold text-uppercase text-black mr-4">BREAKFAST BURRITO</h6>
                                                    <p className=" fs-5 text-danger font-weight-bold mb-0" style={{ fontWeight: 650 }}>$9.50</p>
                                                </div>
                                                <p className="w-xl-75 text-600 mb-4 text-secondary">Three Scrambled Eggs, Cheddar, our Housemade Black
                                                    Bean Cake,
                                                    Avocado, Pico, &amp; Lime Cream</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 border-lg-right border-2x border-300 px-5" style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>
                                            <div className="row no-gutters">
                                                <div className="col d-flex justify-content-between">
                                                    <h6 className="fs-3 font-weight-bold text-uppercase text-black mr-4">VEGGIE JAMMIE</h6>
                                                    <p className="text-danger font-weight-bold mb-0 fs-5" style={{ fontWeight: 650 }}>$5.50</p>
                                                </div>
                                                <p className="w-xl-75 text-600 mb-4 text-secondary">Everything Bagel with our Homemade Tofu Herb
                                                    Spread, Cucumber
                                                    Tomato, Red Onion, &amp; Arugula</p>
                                            </div>
                                            <div className="row no-gutters">
                                                <div className="col d-flex justify-content-between">
                                                    <h6 className="fs-3 font-weight-bold text-uppercase text-black mr-4">BAGEL WITH CREAM CHEESE</h6>
                                                    <p className="text-danger font-weight-bold mb-0 fs-5" style={{ fontWeight: 650 }}>$6.00</p>
                                                </div>
                                                <p className="w-xl-75 text-600 mb-4 text-secondary">Plain, Cranberry, or Everything</p>
                                            </div>
                                            <div className="row no-gutters">
                                                <div className="col d-flex justify-content-between">
                                                    <h6 className="fs-3 font-weight-bold text-uppercase text-black mr-4">BREAKFAST PASTRIES</h6>
                                                    <p className="text-danger font-weight-bold mb-0 fs-5" style={{ fontWeight: 650 }}>$9.00</p>
                                                </div>
                                                <p className="w-xl-75 text-600 mb-4 text-secondary">Three Scrambled Eggs, Cheddar, our Housemade Black
                                                    Bean Cake,
                                                    Avocado, Pico, &amp; Lime Cream</p>
                                            </div>
                                            <div className="row no-gutters">
                                                <div className="col d-flex justify-content-between">
                                                    <h6 className="fs-3 font-weight-bold text-uppercase text-black mr-4">Fried egg</h6>
                                                    <p className="text-danger font-weight-bold mb-0 fs-5" style={{ fontWeight: 650 }}>$9.50</p>
                                                </div>
                                                <p className="w-xl-75 text-600 mb-4 text-secondary">Three Fried Eggs, house hot sauce, local cheddar
                                                    mac, lettuce,
                                                    pickle &amp; onion on a sesame roll</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 px-5" style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>
                                            <div className="row no-gutters">
                                                <div className="col d-flex justify-content-between">
                                                    <h6 className="fs-3 font-weight-bold text-uppercase text-black mr-4">SMOKED SALMON BAGEL </h6>
                                                    <p className="text-danger font-weight-bold mb-0 fs-5" style={{ fontWeight: 650 }}>$9.50</p>
                                                </div>
                                                <p className="w-xl-75 text-600 mb-4 text-secondary">Smoked Salmon, Capers, House Pickled Red Onions,
                                                    &amp; Cream
                                                    Cheese served on a Toasted Bagel</p>
                                            </div>
                                            <div className="row no-gutters">
                                                <div className="col d-flex justify-content-between">
                                                    <h6 className="fs-5 font-weight-bold text-uppercase text-black mr-4">BREAKFAST JAMMIE </h6>
                                                    <p className="text-danger font-weight-bold mb-0 fs-5" style={{ fontWeight: 650 }}>$6.50</p>
                                                </div>
                                                <p className="w-xl-75 text-600 mb-4 text-secondary">Everything Bagel with Cream Cheese, Bacon, Tomato,
                                                    Red Onion,
                                                    Basil Pesto, Arugula</p>
                                            </div>
                                            <div className="row no-gutters">
                                                <div className="col d-flex justify-content-between">
                                                    <h6 className="fs-3 font-weight-bold text-uppercase text-black mr-4">AVOCADO TOAST</h6>
                                                    <p className="text-danger font-weight-bold mb-0 fs-5" style={{ fontWeight: 650 }}>$7.50</p>
                                                </div>
                                                <p className="w-xl-75 text-600 mb-4 text-secondary">Crushed Avocado topped with MV Sea Salt on Toasted
                                                    Multigrain
                                                </p>
                                            </div>
                                            <div className="row no-gutters">
                                                <div className="col d-flex justify-content-between">
                                                    <h6 className="fs-3 font-weight-bold  text-uppercase text-black mr-4">AVOCADO TOAST</h6>
                                                    <p className="text-danger font-weight-bold mb-0 fs-5" style={{ fontWeight: 650 }}>$6.50</p>
                                                </div>
                                                <p className="w-xl-75 text-600 mb-4 text-secondary">Crushed Avocado topped with MV Sea Salt on Toasted
                                                    Multigrain
                                                </p>
                                            </div>
                                        </div>
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

export default DetailSection
import React from 'react'
import './OrderSection.css';

function OrderSection() {
    return (
        <section className="pb-0 pt-7 bg-dark order order-section" id='order'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 px-xxl-5 col-5 d-none d-md-block order-md-1 order-lg-0">
                        <div className="overflow-hidden"><img className="position-absolute b-0" src="https://themewagon.gitlab.io/restaurant/assets/img/food/fried-clipart-transparent-background-7.png" alt height={350} style={{ transform: 'matrix(1, 0, 0, 1, 0, 0)' }} /></div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-7 ml-xl-4 ml-lg-6 text-center text-md-left" id='box'>
                        <p className="text-warning mb-1 fw-bold">Hungry?</p>
                        <h4 className="text-white">We will home deliver !</h4><button className="btn btn-warning mt-3" type="button">Make an
                            order</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default OrderSection
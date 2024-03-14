import React from 'react'
import './MenuSection.css'
function MenuSection() {
    return (
        <section id="Menu" className='Menu-Container'>
            <div className="container text-center">
                <div className="text">
                    <h1>Menu</h1>
                    <p className="fs-1 fw-bold">Taste Our Foods &amp; Enjoy</p>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col" style={{ width: 270 }}>
                        <img src="https://themewagon.gitlab.io/restaurant/assets/img/food/bowl-delicious-dinner.png" className="w-100 object-fit-cover border rounded " alt="img" />
                    </div>
                    <div className="col"><img src="https://themewagon.gitlab.io/restaurant/assets/img/food/bowl-calcium-cereal.png" className="w-100 object-fit-cover border rounded " alt="img" /></div>
                    <div className="col"><img src="	https://themewagon.gitlab.io/restaurant/assets/img/food/bread-bun-chopping-board.png" className="w-100 object-fit-cover border rounded " alt="img" /></div>
                    <div className="col"><img src="https://themewagon.gitlab.io/restaurant/assets/img/food/antioxidant-beverage-carrot-juice.png" className="w-100 object-fit-cover border rounded " alt="img" /></div>
                </div>
            </div>
        </section>

    )
}

export default MenuSection
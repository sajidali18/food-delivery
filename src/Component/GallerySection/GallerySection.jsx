import React from 'react'
import './GallerySection.css'

function GallerySection() {
    return (
        <section className="bg-light pt-lg-8 pt-7 gallery-width">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col pl-0">
                        <div className="row no-gutters mb-2">
                            <div className="col-md-5 px-2 mb-3 mb-md-0"><a href="#" data-fancybox="gallery" data-caption="Image caption">
                                <img className="img-fluid rounded-soft" src="	https://themewagon.gitlab.io/restaurant/assets/img/gallery/thumb/bigimg.jpg" alt="jskbdk" />
                            </a></div>
                            <div className="col-md-7">
                                <div className="row no-gutters">
                                    <div className="col-4 px-2 mb-3"><a href="#" data-fancybox="gallery" data-caption="Image caption">
                                        <img className="img-fluid rounded-soft" src="	https://themewagon.gitlab.io/restaurant/assets/img/gallery/thumb/1.jpg" alt="hjsavj" />
                                    </a></div>
                                    <div className="col-4 px-2 mb-3"><a href="#">
                                        <img className="img-fluid rounded-soft" src="https://themewagon.gitlab.io/restaurant/assets/img/gallery/thumb/4.jpg" alt="bdjh" />
                                    </a></div>
                                    <div className="col-4 px-2 mb-3"><a href="#">
                                        <img className="img-fluid rounded-soft" src="https://themewagon.gitlab.io/restaurant/assets/img/gallery/thumb/2.jpg" alt="sajdh" />
                                    </a></div>
                                    <div className="col-4 px-2 mb-3"><a href="#">
                                        <img className="img-fluid rounded-soft" src="https://themewagon.gitlab.io/restaurant/assets/img/gallery/thumb/5.jpg" alt="sajdi" />
                                    </a></div>
                                    <div className="col-4 px-2 mb-3"><a href="#">
                                        <img className="img-fluid rounded-soft" src="https://themewagon.gitlab.io/restaurant/assets/img/gallery/thumb/3.jpg" alt="sahkd" />
                                    </a></div>
                                    <div className="col-4 px-2"><a href="#">
                                        <img className="img-fluid rounded-soft" src="https://themewagon.gitlab.io/restaurant/assets/img/gallery/thumb/6.jpg" alt="sad" />
                                    </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default GallerySection
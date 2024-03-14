import React from 'react'
import './FormSection.css'

function FormSection() {
    return (
        <section className="bg-light form-width">
            <div className="container">
                <div className="row justify-content-center form-row">
                    <div className="col-xxl-8">
                        <div className="row text-center justify-content-center">
                            <div className="col-md-10 col-lg-7">
                                <div className="overflow-hidden">
                                    <h1 className="fw-bold fs-2 fs-sm-3 fs-md-4" style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>Feel
                                        free to drop us a line!</h1>
                                </div>
                                <div className="overflow-hidden">
                                    <p style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }} className="text-secondary font-monospace">Let's
                                        talk if you
                                        have any query or
                                        suggestion. We are open to learn from you. So don't hesitate to reach us anytime.</p>
                                </div>
                            </div>
                        </div>
                        <form className="zform mt-4" method="post"><input type="hidden" name="to" defaultValue="username@domain.extension" />
                            <div className="row">
                                <div className="col-md">
                                    <div className="form-group"><input className="fs-0 form-control form-control-lg" type="text" placeholder="Your Name" required="required" /></div>
                                    <div className="form-group" style={{ margin: '23px 0px' }}><input className="fs-0 form-control form-control-lg" type="text" placeholder="Subject" required="required" /></div>
                                    <div className="form-group" style={{ margin: '23px 0px' }}><input className="fs-0 form-control form-control-lg" type="email" placeholder="Email Address" required="required" /></div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox"><input className="custom-control-input fs-5 checkbox" id="sendeMeACopyCheck" type="checkbox" /><label className="custom-control-label text-secondary fs-5" htmlFor="sendeMeACopyCheck">Send me a copy</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-group" style={{ marginLeft: 18 }}><textarea className="fs-0 form-control contact-message resize-none message fs-4" rows={6} placeholder="Type your message here" required="required" defaultValue={""} /></div><button id='btn' className="btn btn-dark mx-3 my-2" type="submit">Give us a
                                        shot</button>
                                    <div className="zform-feedback my-2" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FormSection
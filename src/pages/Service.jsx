
import React from 'react'

function Service() {
    return (
        <div className='container'>
           <section id="resume">
           <section className='service py-5'>
                <div className="row my-details">
                    <div className="col-md-3 pt-3">
                        <ul className="nav nav-pills mb-3 d-block" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Education</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Experience</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Service</button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-9">

                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="education">
                                    <div className="heading">
                                        <h2 className='text-primary fs-3'>Education</h2>
                                    </div>
                                    <div className="d-flex e-right mt-4 pt-2">
                                        <div className="left">
                                            <box-icon type='solid' id="ed-book" name='book'></box-icon>
                                        </div>
                                        <div className="right px-3">
                                            <div className="ed">
                                                <span className='fw-bold text-primary'>10/2021 - 07/2023</span>
                                                <h3 className='h5 fw-bold'>Diploma in Frontend web developer</h3>
                                                <h5 className='fw-bold h6 mt-3'>Dice Acedmy (Delhi)</h5>
                                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="d-flex e-right mt-4 pt-2">
                                        <div className="left">
                                            <box-icon type='solid' id="ed-book" name='book'></box-icon>
                                        </div>
                                        <div className="right px-3">
                                            <div className="ed">
                                                <span className='fw-bold text-primary'>2021 - 0000</span>
                                                <h3 className='h5 fw-bold'>Pursing To Bachelor of Art</h3>
                                                <h5 className='fw-bold h6 mt-3'>Uttarakhand Open  University</h5>
                                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="d-flex e-right mt-4 pt-2">
                                        <div className="left">
                                            <box-icon type='solid' id="ed-book" name='book'></box-icon>
                                        </div>
                                        <div className="right px-3">
                                            <div className="ed">
                                                <span className='fw-bold text-primary'>2017 - 2018</span>
                                                <h3 className='h5 fw-bold'>12<sup>th</sup></h3>
                                                <h5 className='fw-bold h6 mt-3'>Uttarakhand Board</h5>
                                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div className="experience">
                                    <div className="heading">
                                        <h2 className='text-primary fs-3'>Experience</h2>
                                    </div>
                                    <p>Fresher</p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <div className="heading">
                                    <h2 className='text-primary fs-3'>Service</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                </div>
                                <div className="service">
                                    <div className="row row-gap-4 pt-5">
                                        <div className="col-md-5">
                                            <div className="card">
                                                <div className="card-body py-5">
                                                    <div className="card-image text-center pb-5">
                                                        <box-icon type='solid' id="ed-book" name='book'></box-icon>
                                                    </div>
                                                    <div className="card-title">
                                                        <h4>WEB DESIGN</h4>
                                                        <p className='mt-5'>
                                                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                        <div className="card">
                                                <div className="card-body py-5">
                                                    <div className="card-image text-center pb-5">
                                                        <box-icon type='solid' id="ed-book" name='book'></box-icon>
                                                    </div>
                                                    <div className="card-title">
                                                        <h4>WEB DEVELOPER</h4>
                                                        <p className='mt-5'>
                                                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
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
                </div>
            </section>
           </section>
        </div>
    )
}

export default Service
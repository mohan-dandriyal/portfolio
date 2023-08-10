import React from 'react'
// import my from '../image/profile.jpg'

function Contact() {
    return (
        <>
            <div className='container'>
                <section id='contact' className="contact py-5">
                    <div className="heading" >
                        <h2 className='text-center'>Contact Me</h2>
                        <p className='text-center w-50 mx-auto mt-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>

                    {/* thhis is a contaact cards  */}
                    <div className="row my-details justify-content-center gap-4 py-5">
                        <div className="card py-4 con-card col-md-3">
                            <div className="card-body">
                                <div className="card-icon">
                                    <box-icon type='solid' className='con-icon' style={{ fill: '#ffff' }} name='home-heart'></box-icon>
                                </div>
                                <div className="card-title">
                                    <h3 className='h5 fw-bolder text-center mt-4'>Address</h3>
                                    <p>99/142 Dda Flate Dakshin Puri Dr Ambedkar 110062</p>
                                </div>
                            </div>
                        </div>

                        <div className="card py-4 con-card col-md-3">
                            <div className="card-body">
                                <div className="card-icon">
                                    <box-icon type='solid' className='con-icon' style={{ fill: '#ffff' }} name='phone'></box-icon>
                                </div>
                                <div className="card-title">
                                    <h3 className='h5 fw-bolder text-center mt-4'>Contact Number</h3>
                                    <p><span>91+ </span> 8449141815</p>
                                </div>
                            </div>
                        </div>

                        <div className="card py-4 con-card col-md-3">
                            <div className="card-body">
                                <div className="card-icon">
                                    <box-icon type='solid' className='con-icon' style={{ fill: '#ffff' }} name='envelope'></box-icon>
                                </div>
                                <div className="card-title">
                                    <h3 className='h5 fw-bolder text-center mt-4'>Email Address</h3>
                                    <p>dandriyal2000@gmail.com</p>
                                </div>
                            </div>
                        </div>


                        <div className="card py-4 con-card col-md-3">
                            <div className="card-body">
                                <div className="card-icon">
                                    <box-icon name='webcam' className='con-icon' style={{ fill: '#ffff' }} type='solid' ></box-icon>
                                </div>
                                <div className="card-title">
                                    <h3 className='h5 fw-bolder text-center mt-4'>Website</h3>
                                    <p>dandriyal2000@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* contact form  */}
                    <div className="row   mt-5">
                        <div className="col-md-6 my-image con-left pe-0">
                            {/* <img src={my} className='w-100' alt="" /> */}
                        </div>
                        <div className="col-md-6 bg-light p-5">
                            <form action="">
                                <div className="form-input">
                                    <input type="text" className='form-control py-2' placeholder='Your Name' />
                                </div>

                                <div className="form-input  my-4">
                                    <input type="email" className='form-control py-2' placeholder='Your Email' />
                                </div>

                                <div className="form-input my-4">
                                    <input type="text" className='form-control py-2' placeholder='Subject' />
                                </div>

                                <div className="form-input">
                                    <textarea name="" className='form-control' id="" cols="20" rows="7"></textarea>
                                </div>

                                <div className="sub-btn mt-4">
                                    <button type='button' className='btn btn-primary rounded-5 px-3 py-2 '>SEND MESSAGE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container-fluide mt-4 mb-0">
                <div className="map">
                    <a href="#">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27752.589174965087!2d79.63269278659182!3d29.601545274177244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0b7328910d81f%3A0x9811d25dd87d8ed5!2sAlmora%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1691515620244!5m2!1sen!2sin" className='w-100 h-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Contact
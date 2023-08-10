
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <div className="container">
                <section id="about">
                <div className="row justify-content-center pb-5">
                    <div className="col-md-6 my-profile  text-center pe-0">
                        {/* <img src={my} className='w-100' height='600px'  alt="" /> */}
                    </div>
                    <div className="col-md-6 px-5 py-5 " data-aos="fade-up"  data-aos-offset="400">
                        <div className="heading">
                            <h2 className=''>About Me</h2>
                        </div>
                        <div className="dis">
                            <p className=''>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <div className="deatils">
                            <table className='w-100 mt-5 mb-4' >
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td> <p>Name: </p></td>
                                        <td  className='right'>  <p>Mohan Dandriyal</p></td>
                                    </tr>
                                    <tr>
                                        <td> <p>Date of birth:  </p></td>
                                        <td className='right'>  <p>02 jan 2001</p></td>
                                    </tr>
                                    <tr>
                                        <td> <p>Address:</p></td>
                                        <td className='right'>  <p>Almora Uttarakhand</p></td>
                                    </tr>
                                    <tr>
                                        <td> <p>Zip Code: </p></td>
                                        <td className='right'>  <p>263661</p></td>
                                    </tr>

                                    <tr>
                                        <td> <p>Phone: </p></td>
                                        <td className='right'>  <p>8449141815</p></td>
                                    </tr>

                                    <tr>
                                        <td> <p>Email: </p></td>
                                        <td className='right'>  <p>dandriyal2000@gmail.com</p></td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href="../image/mohan(1).pdf" download className='bg-primary fs-6 fw-light p-2 px-4 text-light rounded-5 text-decoration-none' >Download cv</a>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        </div>
    )
}

export default About
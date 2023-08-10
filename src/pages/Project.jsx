import React from 'react'
import { Link } from 'react-router-dom'

export default function Project() {
    return (
        <div>
            <section id="project" className="project py-5">
                <div className="container-fluid">
                    <div className="heading">
                        <h2 className='text-center mb-5'>Project</h2>
                    </div>
                    <div className="row ">

                        <div className="col-sm-4 p-0 mouse">
                            <Link target='blanck' to='https://64b52a32c86df1133e16da52--mdandriya.netlify.app/'>
                                <img src="https://preview.colorlib.com/theme/ronaldo/images/work-1.jpg.webp" className='w-100' alt="" />
                                <div className="inner-box">
                                    <h5>WEB DESIGN</h5>
                                </div>
                            </Link>
                        </div>

                        <div className="col-sm-4 p-0 mouse">
                            <Link target='blanck' to="https://mdandriya.netlify.app/">
                                <img src="https://preview.colorlib.com/theme/ronaldo/images/work-2.jpg.webp" className='w-100 h-100' alt="" />
                                <div className="inner-box">
                                    <div className="inner-box">
                                        <h5>WEB DESIGN</h5>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-sm-4 p-0 mouse">
                           <Link target='blanck' to="https://64b5594deed28813af6da4b3--brilliant-marzipan-71d90c.netlify.app/">
                           <img src="https://preview.colorlib.com/theme/ronaldo/images/work-3.jpg.webp" className='w-100 h-100' alt="" />
                            <div className="inner-box">
                                <div className="inner-box">
                                    <h5>WEB DESIGN</h5>
                                </div>
                            </div>
                           </Link>
                        </div>

                        <div className="col-sm-4 p-0 mouse">
                            <Link to='https://mohan-dandriyal.github.io/wether_app/' target='blanck'>
                                <img src="https://preview.colorlib.com/theme/ronaldo/images/work-1.jpg.webp" className='w-100' alt="" />
                                <div className="inner-box">
                                    <h5>WEB DESIGN</h5>
                                </div>
                            </Link>
                        </div>

                        <div className="col-sm-4 p-0 mouse">
                            <Link to="">
                                <img src="https://preview.colorlib.com/theme/ronaldo/images/work-2.jpg.webp" className='w-100 h-100' alt="" />
                                <div className="inner-box">
                                    <div className="inner-box">
                                        <h5>WEB DESIGN</h5>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col-sm-4 p-0 mouse">
                           <Link to="">
                           <img src="https://preview.colorlib.com/theme/ronaldo/images/work-3.jpg.webp" className='w-100 h-100' alt="" />
                            <div className="inner-box">
                                <div className="inner-box">
                                    <h5>WEB DESIGN</h5>
                                </div>
                            </div>
                           </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

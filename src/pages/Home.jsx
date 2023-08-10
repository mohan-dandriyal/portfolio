
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


function Home() {
    return (
        <div className="container-fluid f-home">
            <div id='home' className="home w-100 h-100 d-flex align-items-center justify-content-center flex-column text-center position-relative">
                <h5>HEY! I AM</h5>
                <h1>Mohan Dandriyal</h1>
                <h3 style={{ paddingTop: '5rem', fontWeight: 'normal' }}>
                    I'm a {' '}
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Web Designer', 'Developer.', 'Coder']}
                            loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={70}
                            delaySpeed={1500}
                        />
                    </span>
                </h3>
                <div className="box text-center">
                    <div className="inner-box">
                        <box-icon name='down-arrow-alt' id="down"></box-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
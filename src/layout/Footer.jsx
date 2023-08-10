

import React from 'react'

export default function Footer() {
  return (
    <div className='footer bg-dark'>
        <div className="fluid">
          <div className="container">
            <div className="row py-5 row-gap-4">
              <div className="col-md-3 text-light">
                <h5 className=''>About</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div className="col-md-3 text-light">
                <h5>Links</h5>
                <ul className='ps-0' >
                  <li><box-icon name='chevron-right' style={{fill: '#bab3b3'}}></box-icon> <a href="#home">Home</a></li>
                  <li><box-icon name='chevron-right' style={{fill: '#bab3b3'}}></box-icon> <a href="#home">About</a></li>
                  <li><box-icon name='chevron-right' style={{fill: '#bab3b3'}}></box-icon> <a href="#home">Resume</a></li>
                  <li><box-icon name='chevron-right' style={{fill: '#bab3b3'}}></box-icon> <a href="#home">Skill</a></li>
                  <li><box-icon name='chevron-right' style={{fill: '#bab3b3'}}></box-icon> <a href="#home">Project</a></li>
                  <li><box-icon name='chevron-right' style={{fill: '#bab3b3'}}></box-icon> <a href="#home">Contact</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                  <h5>Service</h5>
                  <ul className='ps-0'>
                  <li><box-icon name='chevron-right' style={{fill: '#bab3b3'}}></box-icon> <a href="#home">Web Design</a></li>
                  <li><box-icon name='chevron-right' style={{fill: '#bab3b3'}}></box-icon> <a href="#home">Web Development</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Have a Questions?</h5>
                <p><box-icon type='solid'  style={{fill: '#bab3b3', width: '20px'}} name='edit-location'></box-icon>99/144 DDA Flate Dakshin Puri Dr Ambedkar 110062</p>
               <ul className='ps-0'>
                <li> <a href="tel:8449141815"><box-icon type='solid'  style={{fill: '#bab3b3', width: '20px'}} name='phone'></box-icon> 8449141815</a></li>
                <li><a href="mailto:dandriyal2000@gmail.com"><box-icon type='solid'  style={{fill: '#bab3b3', width: '20px'}} name='envelope'></box-icon> dandriyal2000@gmail.com</a></li>
                </ul>
              </div>
            </div>
            <div className="social-link">
              <ul>
                <li><a href="#"><box-icon type='logo' className="sosial" name='facebook'></box-icon></a></li>
                <li><a href="#"><box-icon type='logo' name='instagram'></box-icon></a></li>
                <li><a href="#"><box-icon type='logo' name='linkedin'></box-icon></a></li>
              </ul>
            </div>
          </div>
            <div className="text-light  bg-dark pb-5 text-center" style={{fontSize: '14px', fontWeight: 600}}>@ CopyRight 2023 By Mohan Dandriyal</div>
        </div>
    </div>
  )
}

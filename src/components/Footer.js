import React from 'react';
import fb from '../image/fb.png';
import twi from '../image/twi5.png';
import ins from '../image/ins1.jpg';
import lin from '../image/lin5.png';

function Footer() {
    return(
        <div id="footer">
        <footer>
            <div className="card">
            <br />
            <div className="card-body">
            <h3 className="card-title">About Us</h3>
            <p className="text">These are our Social Handles, You can <br />also join us there.</p>
            <a href="/">< img src={fb} alt="social media" height="50px" width="50px" /></a>
            <a href="/"><img src={twi} alt="social media" height="50px" width="50px" /></a>
            <a href="/"><img src={ins} alt="social media" height="50px" width="50px" /></a>
            <a href="/"><img src={lin} alt="social media" height="50px" width="50px" /></a>
            </div>
            </div>
      
            <div className="card">
            <br />
            <div className="card-body">
            <h3 className="card-title">Opening Hours</h3>
            <p className="text">Monday to Friday : 12 PM to 12 AM</p>
            <p className="text">Saturday : 12 PM to 12 AM</p>
            <p className="text">Sunday : 12 PM to 3 AM</p>
            </div>
            </div>

            <div className="card">
            <br />
            <div className="card-body">
            <h3 className="card-title">Contact Info</h3>
            <p className="text">Address : Phagwara, Punjab</p>
            <p className="text">Phone : 7763913828</p>
            <p className="text">Email : vishwajeetjee17@gmail.com</p>
            </div>
            </div>

        <div><br /><br />
            <p id="rights">All Rights Reserved || This Template is Made By Restaurant.</p><br />
        </div>
        </footer>
    </div>
);
}
export default Footer;
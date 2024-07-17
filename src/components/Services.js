import React from 'react';
import one from '../image/party1.svg';
import two from '../image/restaurant1.svg';
import three from '../image/restaurant4.svg';

function Services() {
    return (
        <div id="services">
            <br />
            <br /><br />
            <span className="firstheading"><h1 >Services</h1></span>
            <br />
            <br />
            <br />
            <div className="card">
                <br />
                <img src={one} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Birthday</h2> <h2 className="card-title">Party</h2>
                    <p className="text para">Celebrate your special day at Restaurant with our exceptional birthday party services. Enjoy a festive atmosphere, personalized menus, and attentive service tailored to make your event unforgettable. Whether it's an intimate gathering or a grand celebration, we provide the perfect setting, delicious cuisine, and delightful decorations to ensure your birthday is truly special. Let us handle the details while you enjoy your memorable day with family and friends.</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={two} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Business</h2><h2 className="card-title">Meeting</h2>
                    <p className="text para">Host your business meetings at Restaurant for a seamless and professional experience. Our private dining spaces are equipped with modern amenities, ensuring a productive and comfortable environment. Enjoy tailored menus, and a quiet ambiance perfect for discussions and presentations. Whether it’s a large corporate event, we provide the ideal setting to impress your clients and colleagues. Let us take care of the details so you can focus on your business.</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={three} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Small</h2><h2 className="card-title">Function</h2>
                    <p className="text para">Host your small functions at Restaurant for a truly memorable experience. Our versatile event spaces are perfect for intimate gatherings, from family celebrations to social get-togethers. Enjoy personalized menus, exquisite cuisine, and attentive service in a warm and inviting atmosphere. We handle all the details, ensuring your event is seamless and enjoyable. Let Restaurant be the backdrop for your special moments, creating lasting memories for you and your guests.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
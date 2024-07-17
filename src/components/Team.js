import React from 'react';
import first from '../image/1.jpg';
import second from '../image/2.jpg';
import third from '../image/3.jpg';

function Team() {
    return (
        <div id="team">
            <br />
            <br />
            <br />
            <br />
            <span className="firstheading"><h1 >Team</h1></span>
            <br />
            <br />
            <div className="teamtext">
                <br />
                <h4>Mr. Chef 1</h4>
                <img src={first} alt="pic" />
                <br />
                <p>Contact : 1234567890</p>
                <br />
                <p>Meet Chef, the creative force at Restaurant. With 12 years of culinary experience, Chef blends classic techniques with innovative flair. Trained at culinary school and seasoned in top kitchens worldwide, they craft dishes using the freshest local ingredients. Chef's dedication to excellence ensures every meal is a delightful experience. Join us and savor the exceptional flavors created by Chef.</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>Mrs. Chef 2</h4>
                <img src={second} alt="pic" />
                <br />
                <p>Contact : 2345678901</p>
                <br />
                <p>Meet Chef, the creative force at Restaurant. With 12 years of culinary experience, Chef blends classic techniques with innovative flair. Trained at culinary school and seasoned in top kitchens worldwide, they craft dishes using the freshest local ingredients. Chef's dedication to excellence ensures every meal is a delightful experience. Join us and savor the exceptional flavors created by Chef.</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>Mr. Chef 3</h4>
                <img src={third} alt="pic" />
                <br />
                <p>Contact : 3456789012</p>
                <br />
                <p>Meet Chef, the creative force at Restaurant. With 12 years of culinary experience, Chef blends classic techniques with innovative flair. Trained at culinary school and seasoned in top kitchens worldwide, they craft dishes using the freshest local ingredients. Chef's dedication to excellence ensures every meal is a delightful experience. Join us and savor the exceptional flavors created by Chef.</p>
            </div>
            <br /><br />
            <div className="teamtext">
                <br />
                <h4>Mr. Chef 4</h4>
                <img src={first} alt="pic" />
                <br />
                <p>Contact : 4567890123</p>
                <br />
                <p>Meet Chef, the creative force at Restaurant. With 12 years of culinary experience, Chef blends classic techniques with innovative flair. Trained at culinary school and seasoned in top kitchens worldwide, they craft dishes using the freshest local ingredients. Chef's dedication to excellence ensures every meal is a delightful experience. Join us and savor the exceptional flavors created by Chef.</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>Mrs. Chef 5</h4>
                <img src={second} alt="pic" />
                <br />
                <p>Contact : 5678901234</p>
                <br />
                <p>Meet Chef, the creative force at Restaurant. With 12 years of culinary experience, Chef blends classic techniques with innovative flair. Trained at culinary school and seasoned in top kitchens worldwide, they craft dishes using the freshest local ingredients. Chef's dedication to excellence ensures every meal is a delightful experience. Join us and savor the exceptional flavors created by Chef.</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>Mr. Chef 6</h4>
                <img src={third} alt="pic" />
                <br />
                <p>Contact : 6789012345</p>
                <br />
                <p>Meet Chef, the creative force at Restaurant. With 12 years of culinary experience, Chef blends classic techniques with innovative flair. Trained at culinary school and seasoned in top kitchens worldwide, they craft dishes using the freshest local ingredients. Chef's dedication to excellence ensures every meal is a delightful experience. Join us and savor the exceptional flavors created by Chef.</p>
            </div>
            <br />
            <br />
        </div>
    );
}

export default Team;
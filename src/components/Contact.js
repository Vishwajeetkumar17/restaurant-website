import React from 'react';

function Contact() {
    return(
        
        <div id="contact">
          
            <br />
            <br />
            <br />
            <span className="firstheading"><h1 >Contact</h1></span>
            <br />
            <br />
            <form>
            <div className="contactUs">
            <br />
            <h4>Give Us Your Orders And Feedback</h4>
    
            <div className="form-group">
            <input type="text" placeholder="Your Name" className="form-control" required="required" />
            </div>

            <div className="form-group">
            <input type="email" placeholder="Email" className="form-control" />
            </div>

            <div className="form-group">
            <input type="number" placeholder="Mobile No" className="form-control" required="required"/>
            </div>

            <div className="form-group">
            <textarea placeholder="Give Feedback" className="form-control"></textarea>
            </div>

            <div className="form-group">
            <button className="btn" id="mysubmit">Submit</button>
            </div>

            <br />
            </div>
            </form>
        </div>
    );
}
export default Contact;
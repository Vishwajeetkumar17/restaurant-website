import React from 'react';
import one from '../image/sweet1.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Menu4Text() {
    return(
        <div>

<br />
        <br />
        <br />
        
        <Row xs={1} md={2} lg={3} className="g-4 container-fluid mx-auto justify-content-center ">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                  <Card>
                  <img src={one} alt="pic" className="card-img" />
                    <Card.Body>
                      <Card.Title>Sweets</Card.Title>
                      <Card.Text>
                      Sweets, also called candy or confectionery, are treats with sugar as their main ingredient.Sweets are enjoyed for their taste and often play a role in celebrations and social gatherings.
                        <br />
                        <br />
                       <span className='font-weight-bold '>Price : Rs. 200</span> 
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
        
        
            <br />
        
            <br />
            
        </div>
    );
}
export default Menu4Text;
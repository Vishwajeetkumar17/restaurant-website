import React from 'react';
import one from '../image/dinner1.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Menu2Text() {
  return (
    <div >
      <br />
      <br />
      <br />
      <Row xs={1} md={2} lg={3} className="g-4 container-fluid mx-auto justify-content-center ">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <img src={one} alt="pic" className="card-img" />
              <Card.Body>
                <Card.Title>Paneer Tikka</Card.Title>
                <Card.Text>
                A meal is a significant occasion where food is consumed, typically involving a variety of dishes. Meals are usually categorized based on the time of day they are eaten, such as breakfast, lunch, and dinner. 
                  <br />
                  <br />
                  <span className='font-weight-bold '>Price : Rs. 800</span>
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
export default Menu2Text;
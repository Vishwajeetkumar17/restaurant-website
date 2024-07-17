import React from 'react';
import one from '../image/ff.jpg';
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
                <Card.Title>Fast Food</Card.Title>
                <Card.Text>
                Fast food is a type of mass-produced food prepared and served quickly at restaurants or kiosks. It's designed for convenience and affordability, making it a popular choice for busy people on the go.
                  <br />
                  <br />
                  <span className='font-weight-bold '>Price : Rs. 1500</span>
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
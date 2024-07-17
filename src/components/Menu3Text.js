import React from 'react';
import one from '../image/cd.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Menu3Text() {
    return(
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
                      <Card.Title>Cold Drink</Card.Title>
                      <Card.Text>
                      Cold drinks are beverages, usually non-alcoholic, that are served chilled. While refreshing, some cold drinks, especially sugary ones, can be high in calories and contribute to health problems if consumed excessively.
                        <br />
                        <br />
                       <span className='font-weight-bold '>Price : Rs. 400</span> 
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
export default Menu3Text;
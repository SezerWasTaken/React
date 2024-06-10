import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './cards.css';

const Cards = ({ features }) => {
  return (
    <div className='cards-container'>
      <Container>
        <Row gutterWidth={100}>
          {features.map((feature) => (
            <Col xl={6} key={feature.id}>
              <div className='features-card'>
                <div className="card-icon">
                  {feature.icon}
                </div>
                <div className='features-card-text'>
                  <h4>{feature.name}</h4>
                  <p>{feature.paragpragh}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cards;

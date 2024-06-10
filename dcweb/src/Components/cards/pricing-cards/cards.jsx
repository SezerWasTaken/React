import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import './cards.css'

const cards = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xl={6}>
                        <div className="pricing-cards">
                            <div className="pricing-card-text">
                                Premium
                            </div>
                            <div className="pricing-card-features">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div className="pricing-cards">
                            <div className="pricing-card-text">
                                Normal
                            </div>
                            <div className="pricing-card-features">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default cards
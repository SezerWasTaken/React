import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import './cards.css'


const cards = () => {
    return (
        <div className='cards-container'>
            <Container>
                <Row gutterWidth={100}> {/* 24 piksel aralık bırak */}
                    <Col sm={4}>
                        <div className='card'>
                            <div className="card-icon">
                                <i id='card-icon' class="fa-regular fa-lightbulb"></i>
                            </div>
                            <div className='card-text'>
                                <h3>Instant Server Start</h3>
                                <p>On demand file serving over native ESM, no bundling required!</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='card'></div>
                    </Col>
                    <Col sm={4}>
                        <div className='card'></div>
                    </Col>
                    <Col sm={4}>
                        <div className='card'></div>
                    </Col>
                    <Col sm={4}>
                        <div className='card'></div>
                    </Col>
                    <Col sm={4}>
                        <div className='card'></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default cards
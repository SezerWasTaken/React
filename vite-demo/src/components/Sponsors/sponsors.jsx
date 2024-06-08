import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import './sponsors.css'

const sponsors = () => {
    return (
        <div className='sponsors'>
            <hr color='black' />
            <div className='sponsors-container'>
                <h1><i class="fa-regular fa-heart"></i></h1>
                <p>Vite is free and open source, made possible by wonderful sponsors.</p>

                <Container className='sponsors-cards'>
                    <Row gutterWidth={6}>
                        <Col sm={12}>
                            <div className="special-sponsors"><h2>Special Sponsors</h2></div>
                        </Col>
                        <Col sm={4}>
                            <div className='special-sponsors-cards'>
                                ⚡️ Stackblitz
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className='special-sponsors-cards'>
                                Labs
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className='special-sponsors-cards'>
                                Astro
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className="platinum-sponsors"><h2>Platinum Sponsors</h2></div>
                        </Col>
                        <Col sm={6}>
                            <div className='special-sponsors-cards'>
                                Storyblock
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='special-sponsors-cards'>
                                🅱️ Bit
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

export default sponsors
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
                💡
              </div>
              <div className='card-text'>
                <h4>Instant Server Start</h4>
                <p>On demand file serving over native ESM, no bundling required!</p>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className='card'>
              <div className="card-icon">
                ⚡️
              </div>
              <div className='card-text'>
                <h4>Lightning Fast HMR</h4>
                <p>Hot Module Replacement (HMR) that stays fast regardless of app size.</p>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className='card'>
              <div className="card-icon">
                🛠️
              </div>
              <div className='card-text'>
                <h4>Rich Features</h4>
                <p>Out-of-the-box support for TypeScript, JSX, CSS and more.</p>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className='card'>
              <div className="card-icon">
                📦
              </div>
              <div className='card-text'>
                <h4>Optimized Build</h4>
                <p>Pre-configured Rollup build with multi-page and library mode support.</p>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className='card'>
              <div className="card-icon">
                🔩
              </div>
              <div className='card-text'>
                <h4>Universal Plugins</h4>
                <p>Rollup-superset plugin interface shared between dev and build.</p>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className='card'>
              <div className="card-icon">
                🔑
              </div>
              <div className='card-text'>
                <h4>Fully Typed APIs</h4>
                <p>Flexible programmatic APIs with full TypeScript typing.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default cards
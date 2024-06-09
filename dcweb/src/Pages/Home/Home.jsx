import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import roderika from '../../Images/logo.png';
import roderikaMusic from '../../Images/logo2.png';
import roderikaPro from '../../Images/logo3.png';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Container>
          <Row gutterWidth={100}> {/* 24 piksel aralık bırak */}
            <Col sm={6}>
              <div className="text-content">
                <h1>Türkiye'nin en iyi <span id='discord'>discord</span> botları</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime et sequi at adipisci reiciendis fugiat ad dolores labore vitae odit, consectetur id quisquam, nam eveniet earum. Quaerat, optio aperiam?</p>
                <div className="buttons">
                  <a href='https://discord.com/oauth2/authorize?client_id=1055570192463319211&scope=bot&permissions=8' className='btn-home'>Davet Et</a>
                  <a href='https://discord.gg/roderika' className='btn-home'>Sunumuca Katıl</a>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className='card'>
                <div className="card-img">
                  <img src={roderika} alt="" />
                </div>
                <div className='card-text'>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, nam?</p>
                </div>
              </div>

              <div className='card'>
                <div className="card-img">
                  <img src={roderikaMusic} alt="" />
                </div>
                <div className='card-text'>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, nam?</p>
                </div>
              </div>

              <div className='card'>
                <div className="card-img">
                  <img src={roderikaPro} alt="" />
                </div>
                <div className='card-text'>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, nam?</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import PricingCards from '../../Components/cards/pricing-cards/cards';
import './Pricing.css'

const Pricing = () => {
  return (
    <div className='pricing'>
    <div className="pricing-container">
        <div className="pricing-text">
            <h1>Paketler</h1>
        </div>
        <div className="pricing-cards">
            <PricingCards></PricingCards>
        </div>
    </div>
</div>
  )
}

export default Pricing
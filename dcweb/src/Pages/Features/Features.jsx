import React from 'react';
import Cards from '../../Components/cards/features-cards/cards';
import contents from '../../Content';
import './Features.css';

const Features = () => {
    return (
        <div className='features'>
            <div className="features-container">
                <div className="features-text">
                    <h1>Features</h1>
                </div>
                <div className="features-cards">
                    <Cards features={contents} />
                </div>
            </div>
        </div>
    );
}

export default Features;

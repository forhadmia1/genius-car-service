import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className='col'>
            <div className='border shadow rounded-md'>
                <img src={img} alt="" />
                <div className='service-info'>
                    <h2>{name}</h2>
                    <p>Price: {price}</p>
                    <p>{description}</p>
                    <button className='btn btn-primary fw-bold'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
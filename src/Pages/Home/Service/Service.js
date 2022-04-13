import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, description, img, id } = service;
    const navigate = useNavigate();
    return (
        <div className='col'>
            <div className='border shadow rounded-md'>
                <img src={img} alt="" />
                <div className='service-info'>
                    <h2>{name}</h2>
                    <p>Price: {price}</p>
                    <p>{description}</p>
                    <button onClick={() => { navigate(`/service/${id}`) }} className='btn btn-primary fw-bold'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <h2 className='text-center'> welcome to service details {serviceId}</h2>
            <div className='d-flex justify-content-center'>
                <Button onClick={() => navigate('/checkout')}>Procced checkout</Button>
            </div>
        </div>
    );
};

export default ServiceDetail;
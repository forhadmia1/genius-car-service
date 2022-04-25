import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useSingleService from '../../hooks/useSingleService';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const [singleService] = useSingleService(serviceId)
    return (
        <div>
            <h2 className='text-center'> welcome to service details: {singleService.name}</h2>
            <div className='d-flex justify-content-center'>
                <Button onClick={() => navigate(`/checkout/${serviceId}`)}>Procced checkout</Button>
            </div>
        </div>
    );
};

export default ServiceDetail;
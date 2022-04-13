import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            welcome to service details {serviceId}
        </div>
    );
};

export default ServiceDetail;
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-wildwood-79040.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])


    return (
        <div className="container" id='service'>
            <h2 className='text-center fw-bold my-5 text-primary'>Our Services</h2>
            <div className='row row-cols-3 g-3'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
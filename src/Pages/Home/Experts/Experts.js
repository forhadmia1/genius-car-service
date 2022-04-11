import React from 'react';
import { Row } from 'react-bootstrap';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Jhon willims', image: expert1 },
    { id: 2, name: 'Jhon willims', image: expert2 },
    { id: 3, name: 'Jhon willims', image: expert3 },
    { id: 4, name: 'Jhon willims', image: expert4 },
    { id: 5, name: 'Jhon willims', image: expert5 },
    { id: 6, name: 'Jhon willims', image: expert6 }
]

const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-primary fw-bold m-5'>Our Experts</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </Row>
        </div>
    );
};

export default Experts;
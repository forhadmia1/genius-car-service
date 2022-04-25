import React from 'react';
import page404 from '../../images/404.jpg'
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
    return (
        <div>
            <PageTitle title={'404'} />
            <img className='w-100' src={page404} alt="" />
        </div>
    );
};

export default NotFound;
import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='bg-secondary mt-5 '>
            <p className='py-5 fs-4 text-white mb-0'><small>copyright &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;
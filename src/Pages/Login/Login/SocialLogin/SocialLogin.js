import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (loading) {
        return <Spinner animation="border" variant="danger" />;
    }


    return (
        <div className='mt-3'>
            <div className='d-flex align-items-center mb-3'>
                <div className='bg-primary w-50' style={{ height: '2px' }}></div>
                <span className='px-2'>or</span>
                <div className='bg-primary w-50' style={{ height: '2px' }}></div>
            </div>
            <Button className='btn-outline-secondary btn-light px-5 mx-auto d-block'>
                Facebook sign in
            </Button>
            <Button className='btn-outline-secondary btn-light px-5 mx-auto d-block mt-4'>
                Git Hub sign in
            </Button>
            <Button onClick={() => signInWithGoogle()} className='btn-outline-secondary btn-light px-5 mx-auto d-block mt-4'>
                Google sign in
            </Button>
        </div>
    );
};

export default SocialLogin;
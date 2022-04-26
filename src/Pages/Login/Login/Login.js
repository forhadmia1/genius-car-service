import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../PageTitle/PageTitle';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const location = useLocation();
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user)

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    const submitForm = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password)
    }

    if (token) {
        navigate(from, { replace: true });
    }

    if (sending) {
        return <Spinner animation="border" variant="danger" />;
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (!email) {
            toast("Please enter an email")
        } else {
            await sendPasswordResetEmail(email);
            await toast("sent email for reset password")

        }
    }

    return (
        <div className='py-4'>
            <PageTitle title={'LogIn'} />
            <h2 className='text-center'>Please LogIn</h2>
            <div className='w-25 mx-auto text-start'>
                <Form onSubmit={submitForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p className='text-center'>New to here? <Link className='text-danger fw-bold' to='/register'>Register</Link></p>
                    <p>Forget Password? <button onClick={resetPassword} className='btn-link border-0'>Reset Password</button></p>
                    <div className='d-flex justify-content-center'>
                        <Button variant="primary" type="submit">
                            LogIn
                        </Button>
                    </div>
                </Form>
                <ToastContainer />
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;
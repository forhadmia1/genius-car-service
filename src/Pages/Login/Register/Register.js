import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('')
    const confrimPasswordRef = useRef('')

    const submitForm = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confrimPassword = confrimPasswordRef.current.value;
        console.log(email, password, confrimPassword)

    }

    return (
        <div className='py-4'>
            <h2 className='text-center'>Please Register </h2>
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
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confrim-Password</Form.Label>
                        <Form.Control ref={confrimPasswordRef} type="password" placeholder="confrim Password" required />
                    </Form.Group>
                    <p className='text-center'>Already have an account? <Link className='text-danger fw-bold' to='/login'>Log In</Link></p>
                    <div className='d-flex justify-content-center'>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </div>

                </Form>
            </div>
        </div>
    );
};

export default Register;
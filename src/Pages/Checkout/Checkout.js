import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useSingleService from '../../hooks/useSingleService';

const Checkout = () => {
    const { serviceId } = useParams()
    const [singleService] = useSingleService(serviceId)
    const [user] = useAuthState(auth)

    const handleOrder = (e) => {
        e.preventDefault()
        const order = {
            email: e.target.email.value,
            name: e.target.name.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            service: e.target.Service.value,
        }
        axios.post('http://localhost:5000/order', order)
            .then(function (response) {
                if (response.data.insertedId) {
                    toast('order is successfully placed')
                    e.target.reset()
                };
            })
    }

    return (
        <div>
            <h2>your services is here!!!{singleService.name}</h2>
            <form onSubmit={handleOrder}>
                <input className='w-50 mb-3' value={user.displayName} disabled type="text" name="name" id="" placeholder='name' required />
                <br />
                <input className='w-50 mb-3' value={user.email} disabled type="text" name="email" id="" placeholder='Email' required />
                <br />
                <input className='w-50 mb-3' value={singleService.name} type="service" name="Service" id="" placeholder='service' required readOnly />
                <br />
                <input className='w-50 mb-3' type="text" name="address" id="" placeholder='Address' required autoComplete='off' />
                <br />
                <input className='w-50 mb-3' type="text" name="phone" id="" placeholder='Phone' required />
                <br />
                <input type="submit" value="Order" />
            </form>
            <ToastContainer
                position='top-center'
            />
        </div>
    );
};

export default Checkout;
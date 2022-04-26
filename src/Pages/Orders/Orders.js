import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Orders = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email
            const url = `https://sheltered-wildwood-79040.herokuapp.com/order?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        'atorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setOrders(data)
            } catch (error) {
                console.error(error)
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrders()
    }, [])
    return (
        <div>
            this is orders{orders.length}
        </div>
    );
};

export default Orders;
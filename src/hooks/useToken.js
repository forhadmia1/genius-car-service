import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const email = (user?.user?.email)
    const [token, setToken] = useState('')

    useEffect(() => {
        const getToken = async () => {
            if (email) {
                const { data } = await axios.post('https://sheltered-wildwood-79040.herokuapp.com/login', { email })
                setToken(data.token)
                localStorage.setItem('accessToken', data.token)
            }
        }
        getToken()
    }, [user])

    return [token]

};

export default useToken;
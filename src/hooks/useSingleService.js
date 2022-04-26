import { useEffect, useState } from "react";

const useSingleService = (serviceId) => {

    const [singleService, setSingleService] = useState({})
    useEffect(() => {
        fetch(`https://sheltered-wildwood-79040.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [serviceId])
    return [singleService, setSingleService]
};

export default useSingleService;
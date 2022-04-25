import { useEffect, useState } from "react";

const useSingleService = (serviceId) => {

    const [singleService, setSingleService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [serviceId])
    return [singleService, setSingleService]
};

export default useSingleService;
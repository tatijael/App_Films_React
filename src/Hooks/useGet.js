import {useEffect, useState} from "react"
import Axios from "axios";

export const useGet = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        setIsLoading(true)
        
        Axios.get(url)
            .then((results) => {
                setData(results.data.results)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsError(true)
                setIsLoading(false)
            })
    }, [url])
    
    return [data, isLoading, isError];
};

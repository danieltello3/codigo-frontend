import {useEffect, useState} from 'react'



const useFetch = (url)=> {
    const[data, setData] = useState(null);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        fetch(url).then((res) =>{
            if(!res.ok){
                throw Error("No se pudo hacer el fetch(la consulta al servidor)")
            }
            return res.json()
        }).then(data => {
            setData(data);
            setIsLoading(false);
            setError(null)
        }).catch(error => {
            setIsLoading(false)
            setError(error.message)
        })
    },[url])
    return {data, isLoading, error};
}

export default useFetch;
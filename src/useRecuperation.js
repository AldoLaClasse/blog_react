import { useState, useEffect } from 'react'

//fetch des data, réponse et isLoading

const useRecuperation = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect( () =>  {

        const abortCont = new AbortController()

        fetch('http://localhost:8000/blogs', {signal : abortCont.signal})
        .then ((response) => {
            if (!response.ok) {
                throw Error('Une erreur est survenue sur le fetch')
            }
            return response.json()})
        .then ((data) => {
            setData(data)
            setError(null)    
        })
        .catch(err => {
            setError(err.message)
        })

        return () => abortCont.abort

    }, [url])

    return{data, error}
}

export default useRecuperation;
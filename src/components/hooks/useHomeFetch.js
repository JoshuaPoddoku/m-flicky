import { useState, useEffect} from 'react';
import { API_KEY, API_URL} from '../../config';


export const useHomeFetch = () => {
    const [ state, setState ] = useState({ movies: [] });
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);


    const fetchMovies = async endpoint => {   //async: until we get something from endpoint
        setError(false);
        setLoading(true);

        try{
            const result = await ( await fetch(endpoint)).json(); //wait twice until fetches endpoint converts into json
            console.log(result);
            setState(prev =>({
                ...prev,
                movies: [...result.results],
                HeroImage: prev.HeroImage || result.results[0],
                currentPage: result.page,
                totalPages: result.total_pages,
            }))

        }catch(error){
            setError(true);
            console.log(error);
        }
        setLoading(false);
    }         

    useEffect( () => {
        fetchMovies('${API_URL}movie/popular?api_key=${API_KEY}');
    }, [])

    return [{state, loading, error}, fetchMovies];
}
import React, { useState, useCallback, useEffect } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import Movies from 'components/movies';
import LoadingSVG from 'assets/img/loading.svg';
import { endPoints } from 'config/apis';
import { ResponseInterface } from '../movies/index.interface';



export const Search: React.FC<{}> = ({ }) => {
    const [movies, setMovies] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);
    const [query, setQuery] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [pagerRequest, setPagerRequest] = useState(false); 

    const searchHandler = useCallback(async () => {
        setLoading(true);
        const escapeQuery = query.replace(/[ ]/g, '+');
        try {
            const apiEndPoint = endPoints(process.env.REACT_APP_API_KEY as string, page, escapeQuery).search;
            const fetchMovies = await fetch(apiEndPoint);
            let jsonData = [];
            if (fetchMovies.ok && fetchMovies.status === 200) {
                jsonData = await fetchMovies.json();
                setMovies(jsonData);
            } else {
                setError('Something went wrong')
            }
            setLoading(false);
        } catch (err: any) {
            setLoading(false);
            throw new Error(err.response.message);

        }
    }, [page, query]);

    useCallback(async (e: any) => {
        setLoading(true);
        const escapeQuery = query.replace(/[ ]/g, '+');
        try {
            const apiEndPoint = endPoints(process.env.REACT_APP_API_KEY as string, page, escapeQuery).search;
            const fetchMovies = await fetch(apiEndPoint);
            let jsonData = [];
            if (fetchMovies.ok && fetchMovies.status === 200) {
                jsonData = await fetchMovies.json();
                setMovies(jsonData);
            } else {
                setError('Something went wrong')
            }
            setLoading(false);
        } catch (err: any) {
            setLoading(false);
            throw new Error(err.response.message);

        }
    }, [page, query]);

    const sePageHander = (i:number) => {
        setPage(i)
        setPagerRequest(true);
    }
    
    useEffect(() => {
        if(pagerRequest) {
            searchHandler();
        }
    }, [page, pagerRequest, searchHandler])
    
    return (
        <><div className="section9">
            {error}
            <div className="search">
                <input
                    placeholder="Search here..."
                    type="text"
                    className="search__input"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button className="search__btn" onClick={searchHandler}>Search</button>
            </div>
        </div>

            {movies.results && movies.results.length > 0 &&
                // @ts-ignore
                <Movies results={movies} activePage={page} sePageHander ={sePageHander}/>}

            <div className="main-message">
                {movies.results && movies.results.length === 0 && <div>No data found</div>}
                {loading && <img src={LoadingSVG} alt="" />}
            </div>
        </>
    );
}
export default Search;

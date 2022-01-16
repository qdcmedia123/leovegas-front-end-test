import LoadingSVG from 'assets/img/loading.svg';
import Movies from 'components/movies';
import { endPoints } from 'config/apis';
import React, { useCallback, useEffect, useState } from 'react';



export const Search: React.FC<{}> = () => {
    const [movies, setMovies] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);
    const [query, setQuery] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [pagerRequest, setPagerRequest] = useState(false);

    const searchHandler = useCallback(async (page) => {
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
    }, [query]);

    const sePageHander = (i: number, e: any) => {
        e.preventDefault();
        setPage(i)
        setPagerRequest(true);
        searchHandler(i);
    }
  

    const setToPrePage = (e: any) => {
        e.preventDefault();
        if (page > 1) {
            setPage(page - 1);
        }
    }
    const setToNextPage = () => {
        if (page < movies.total_pages) {
            setPage(page + 1);
        }

    }
    const onEnterKey = (e:any) => {
        if(e.key === 'Enter') {
            searchHandler(page);
            setPage(1);
        }
    }

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
                    onKeyDown={onEnterKey}
                    
                />
                <button 
                className="search__btn" 
                onClick={() => {
                    searchHandler(1);
                    setPage(1);
                }} >Search</button>
            </div>
        </div>
            <section className="movies-sections">
                {movies.results && movies.results.length > 0 &&
                    // @ts-ignore
                    <Movies
                        results={movies}
                        activePage={page}
                        sePageHander={sePageHander}
                        setToPrePage={setToPrePage}
                        setToNextPage={setToNextPage}
                    />}
                <div className="main-message">
                    {!loading && movies.results && movies.results.length === 0 && <div>No data found</div>}
                    {loading && <img src={LoadingSVG} alt="" />}
                </div>
            </section>

        </>
    );
}
export default Search;

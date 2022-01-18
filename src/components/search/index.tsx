import React, { useCallback, useState, useEffect } from 'react';
import LoadingSVG from 'assets/img/loading.svg';
import Movies from 'components/movies';
import { endPoints } from 'config/apis';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const Search: React.FC<{}> = () => {
    const state = useTypedSelector((state) => state);
    const { auth: { movies, query: globalQuery, page } } = state;

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);
    const [query, setQuery] = useState<string>('');

    const {
        fetchMovies: fetchMoviesAction,
        setQuery: setQueryAction,
        setPageAction
    } = useActions();


    const searchHandler = useCallback(async (page) => {
        if (!query) {
            console.log('query is null')
            return;
        }
        setLoading(true);
        const escapeQuery = query.replace(/[ ]/g, '+');
        try {
            const apiEndPoint = endPoints(process.env.REACT_APP_API_KEY as string, page, escapeQuery).search;
            const fetchMovies = await fetch(apiEndPoint);
            
            let jsonData = [];
            if (fetchMovies.ok && fetchMovies.status === 200) {
                jsonData = await fetchMovies.json();
                fetchMoviesAction(jsonData);
                console.log(jsonData)

            } else {
                setError('Something went wrong')
            }
            setLoading(false);
        } catch (err: any) {
            setLoading(false);
            throw new Error(err.response.message);

        }
    }, [query, fetchMoviesAction]);

    const sePageHander = (i: number, e: any) => {
        e.preventDefault();
        setPageAction(i)
        searchHandler(i);
    }

    const setToPrePage = (e: any) => {
        e.preventDefault();
        if (page && page > 1) {
            setPageAction(page - 1);
            searchHandler(page - 1);
        }
    }

    const setToNextPage = () => {
        if (page && page < movies.total_pages) {
            setPageAction(page + 1);
            searchHandler(page + 1);
        }

    }

    const onEnterKey = (e: any) => {
        if (e.key === 'Enter') {
            searchHandler(page);
            setPageAction(1);
            setQueryAction(query);
        }
    }
    
    useEffect(() => {
        if(query === "" && globalQuery !== "") {
            setQuery(globalQuery);
        }
    },[])
    return (
        <><div className="section9">
            {error}
            <div className="search">
                <input
                    placeholder="Search here..."
                    type="text"
                    className="search__input"
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value);
                    }}
                    onKeyDown={onEnterKey}

                />
                <button
                    className="search__btn"
                    onClick={() => {
                        searchHandler(1);
                        setPageAction(1)
                        setQueryAction(query);
                    }} >Search</button>
            </div>
        </div>
            <section className="movies-sections">
                {movies.results && movies.results.length > 0 &&
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

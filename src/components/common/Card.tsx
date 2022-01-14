import React, { useMemo } from 'react';
import movie from 'assets/img/group.png'
import Star from 'assets/img/Star.svg';
import Heart from 'assets/img/heart-diactive.svg';
import HeartActive from 'assets/img/heart-active.svg';
import { getGenreName } from 'functions/getGenerNameById';
import { MovieInterface } from 'components/movies/index.interface';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import watchLetterActive from 'assets/img/watch-letter-active.svg';
import watchLetterDeActiv from 'assets/img/watch-letter-active.svg';


interface CardInterface {
    results: MovieInterface[]
}

const Card: React.FC<CardInterface> = ({ results }) => {
    const state = useTypedSelector((state) => state);
    console.log(state)
    const { authUser, watchLatter } = useActions();
    const dispatchToFavMovies = async (movie: any) => {
        await authUser(movie);
    }
    const dispatchToWatchLetter = async(movie:any) => {
        await watchLatter(movie);
    }

    // Check in main store if movie in fave exists 
    const isMovieFav = (id: number) => {
        const { auth: { favourites } } = state;
        if (favourites.length > 0) {
            const alreadyFav = favourites.filter((movie: MovieInterface) => {
                if (movie.id === id) {
                    return true;
                }
                return false;
            });
            return alreadyFav.length > 0 ? true : false;
        }
        return false;
    };

    console.log(isMovieFav(550))

    return (
        <div className="movies">
            {results.map((movie, i) => <div className='items' key={i}>
                <div className="item items--img">
                    <div className="img">
                        <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title={`${movie.title}`} alt={`${movie.title}`} />
                        <img src={Star} title="movie" alt="movie" />
                    </div>

                </div>
                <div className="item items--name">
                    <div className="name">{movie.title}</div>
                    <div className="genres">
                        {/* <div className="genre">Adventure</div>
                        <div className="genre">Family</div>
                        <div className="genre">Fantacy</div> */}
                        {movie.genre_ids.map((genre, i) => <div key={i} className="genre">{getGenreName(genre)}</div>)}
                    </div>
                </div>
                <div className="item items--description">
                    <div className="row">
                        <div className="title">Popularity</div>
                        <div className="value">{movie.popularity}</div>
                    </div>
                    <div className="row">
                        <div className="title">Vote Average</div>
                        <div className="value"> {movie.vote_average}</div>
                    </div>
                    <div className="row">
                        <div className="title">Vote Count</div>
                        <div className="value"> {movie.vote_count}</div>
                    </div>
                </div>

                <div className="item items--release">
                    Release Date: {movie.release_date}
                </div>
                <div className="item reviews">
                    {/*  */}
                    {isMovieFav(movie.id) ? 
                       <img src={HeartActive} alt="" onClick={() => dispatchToFavMovies(movie)} /> : 
                       <img src={Heart} alt="" onClick={() => dispatchToFavMovies(movie)} />}

                       <>
                       <img src={watchLetterDeActiv} alt="" onClick={() => dispatchToWatchLetter(movie)}/>
                       </>
                </div>
            </div>
            )}



        </div>

    );
};


export default Card;
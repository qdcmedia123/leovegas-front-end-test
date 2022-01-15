import HeartActive from 'assets/img/heart-active.svg';
import Heart from 'assets/img/heart-diactive.svg';
import Star from 'assets/img/Star.svg';
import watchLetterActive from 'assets/img/watch-letter-active.svg';
import watchLetterDeActiv from 'assets/img/watch-letter-deactive.svg';
import { MovieInterface } from 'components/movies/index.interface';
import { getGenreName } from 'functions/getGenerNameById';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

import React from 'react';


interface CardInterface {
    results: MovieInterface[]
}

const Card: React.FC<CardInterface> = ({ results }) => {
    const state = useTypedSelector((state) => state);
    const { auth: { favourites, watchLatter: watchlatter } } = state;
    console.log('state', state)
    
    const { authUser, watchLatter } = useActions();
    const dispatchToFavMovies = async (movie: any) => {
        await authUser(movie);
    }
    const dispatchToWatchLetter = async(movie:any) => {
        await watchLatter(movie);
    }

    // Check in main store if movie in fave exists 
    const isMovieInProfile = (id: number, data:MovieInterface[]) => {
       
        if (data.length > 0) {
            const alreadyFav = data.filter((movie: MovieInterface) => {
                if (movie.id === id) {
                    return true;
                }
                return false;
            });
            return alreadyFav.length > 0 ? true : false;
        }
        return false;
    };

    

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
                    {isMovieInProfile(movie.id, favourites) ? 
                       <img className = "review-svg active" src={HeartActive} alt="" onClick={() => dispatchToFavMovies(movie)} /> : 
                       <img className = "review-svg deactive" src={Heart} alt="" onClick={() => dispatchToFavMovies(movie)} />}

                       <>
                       {isMovieInProfile(movie.id, watchlatter) ? 
                       <img className = "watchl-svg active" src={watchLetterActive} alt="" onClick={() => dispatchToWatchLetter(movie)} /> : 
                       <img className = "watchl-svg deactive" src={watchLetterDeActiv} alt="" onClick={() => dispatchToWatchLetter(movie)} />}


                       
                       </>
                </div>
            </div>
            )}



        </div>

    );
};


export default Card;
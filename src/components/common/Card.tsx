import React from 'react';
import movie from 'assets/img/group.png'
import Star from 'assets/img/Star.svg';
import Heart from 'assets/img/heart-diactive.svg';
import HeartActive from 'assets/img/heart-active.svg';
import { getGenreName } from 'functions/getGenerNameById';

import { MovieInterface } from 'components/movies/index.interface';

interface CardInterface {
    results: MovieInterface[]
}

const Card: React.FC<CardInterface> = ({results}) => {
   
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
                    <img src={HeartActive} alt="" />

                </div>
            </div>
)}
            


        </div>

    );
};


export default Card;
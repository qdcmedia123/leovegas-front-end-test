import React from 'react';
import movie from 'assets/img/group.png'
import Star from 'assets/img/Star.svg';
import Heart from 'assets/img/heart-diactive.svg';
import HeartActive from 'assets/img/heart-active.svg';


const Card = () => {
    return (
        <div className="movies">
            <div className='items'>
                <div className="item items--img">
                    <div className="img">
                        <img className="poster" src="https://image.tmdb.org/t/p/w500/aXFmWfWYCCxQTkCn7K86RvDiMHZ.jpg" title="movie" alt="movie" />
                        <img src={Star} title="movie" alt="movie" />
                    </div>

                </div>
                <div className="item items--name">
                    <div className="name">Maleficent: Mistress of Evil</div>
                    <div className="genres">
                        <div className="genre">Adventure</div>
                        <div className="genre">Family</div>
                        <div className="genre">Fantacy</div>
                    </div>
                </div>
                <div className="item items--description">
                    <div className="row">
                        <div className="title">Director</div>
                        <div className="value">Joachim Rønning</div>
                    </div>
                    <div className="row">
                        <div className="title">Writer</div>
                        <div className="value"> Micah Fitzerman-Blue (screenplay...</div>
                    </div>
                    <div className="row">
                        <div className="title">Stars</div>
                        <div className="value"> David Gyasi, Angelina Jolie, Elle...</div>
                    </div>
                </div>

                <div className="item items--release">
                    Release Date: 18 October 2019 (UK)
                </div>
                <div className="item reviews">
                    <img src={HeartActive} alt="" />
                   
                </div>
            </div>
          


        </div>

    );
};


export default Card;
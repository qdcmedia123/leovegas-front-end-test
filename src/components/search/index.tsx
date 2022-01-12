import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import Movies from 'components/movies';
import LoadingSVG from 'assets/img/loading.svg';
interface Section9Props {
}
export const Search: React.FC<Section9Props> = ({ }) => {
    // Send http request from here 
    // Pass the movies to movies props 
    return (
        <><div className="section9">
            <div className="search">
                <input placeholder="Search here..." type="text" className="search__input" />
                <button className="search__btn">Search</button>
            </div>
        </div>

        <Movies/>
        <div className="main-message">
            {/* <div className="no-data">
                No data found
            </div>  */}
            {/* <div className="loading">
                <img src={LoadingSVG} alt="" />
            </div> */}

        </div>

       
        </>
        
        );
}
export default Search;

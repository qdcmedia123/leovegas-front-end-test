import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
interface Section9Props {
}
export const Search: React.FC<Section9Props> = ({ }) => {
    return (
        <div className="section9">
            <div className="search">
                <input placeholder="Search here..." type="text" className="search__input" />
                <button className="search__btn">Search</button>
            </div>
        </div>);
}
export default Search;

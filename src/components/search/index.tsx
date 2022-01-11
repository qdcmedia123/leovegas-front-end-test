import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';


const Search = () => {
    const state = useTypedSelector((state) => state);
    console.log(state);
    return (
        <div>
            All About Search
        </div>
    );
};



export default Search;
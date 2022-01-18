import React from 'react';
import Movies from 'components/movies';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const Favirote: React.FC<{}> = () => {
    const state = useTypedSelector((state) => state);
    const { auth: { favourites } } = state;
    return (
        <>
            {favourites && favourites.length > 0 &&
                <Movies results={{ results: favourites }} />}
            <div className="main-message">
                {favourites && favourites.length === 0 && <div>No data found</div>}
            </div>
        </>
    );
}
export default Favirote;

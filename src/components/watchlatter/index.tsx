import React from 'react';
import Movies from 'components/movies';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const WatchLatter: React.FC<{}> = () => {
    const state = useTypedSelector((state) => state);
    const { auth: { watchLatter } } = state;
    return (
        <>
            {watchLatter && watchLatter.length > 0 &&
                // @ts-ignore
                <Movies results={{ results: watchLatter }} />}
            <div className="main-message">
                {watchLatter && watchLatter.length === 0 && <div>No data found</div>}
            </div>
        </>
    );
}
export default WatchLatter;

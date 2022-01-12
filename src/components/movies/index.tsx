import React from 'react';
import Card from 'components/common/Card';

const Movies = (movies: any) => {
    
    return (
        <section className="movies-sections">
            <Card />
            <div className="pagination">
                <ul className="pagination-3">
                    <li className="page-number prev"><a href="!#">&laquo;</a></li>
                    <li className="page-number active"><a href="!#">1</a></li>
                    <li className="page-number"><a href="!#">2</a></li>
                    <li className="page-number"><a href="!#">3</a></li>
                    <li className="page-number"><a href="!#">4</a></li>
                    <li className="page-number"><a href="!#">5</a></li>
                    <li className="page-number"><a href="!#">6</a></li>
                    <li className="page-number prev"><a href="!#">&raquo;</a></li>
                </ul>
            </div>
        </section>

    );
};



export default Movies;
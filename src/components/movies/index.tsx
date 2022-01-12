// @ts-nocheck
import React from 'react';
import Card from 'components/common/Card';
import { ResponseInterface } from './index.interface';


const Movie: React.FC<ResponseInterface> = ({ results, activePage, sePageHander }) => {
    const { page, total_pages } = results;
    return (
        <section className="movies-sections">

            <Card results={results.results} />
            {total_pages > 1 && <div className="pagination">
                <ul className="pagination-3">
                    <li className="page-number prev"><a href="!#">&laquo;</a></li>
                    {Array.from(Array(total_pages), (e, i) => {
                        return <li
                            key={i}
                            className={`page-number ${activePage === i + 1 ? 'active' : ''}`}
                        >
                            <span onClick={() => sePageHander(i + 1)}>{i + 1}</span></li>
                    })}
                    <li className="page-number prev"><a href="!#">&raquo;</a></li>
                </ul>
            </div>}
        </section>

    );
};



export default Movie;
// @ts-nocheck
import React from 'react';
import Card from 'components/common/Card';
import { ResponseInterface } from './index.interface';
const Movie: React.FC<ResponseInterface> = ({ results, activePage, sePageHander, setToPrePage, setToNextPage }) => {
    const { page, total_pages } = results;
    return (
            <>
            <Card results={results.results} />
            {total_pages > 1 && <div className="pagination">
                <span className="page-number prev prev-page" ><a href="!#" onClick={setToPrePage} >&laquo;</a></span>
                <ul className="pagination-3">
                    {Array.from(Array(total_pages), (e, i) => {
                        return <li
                            key={i}
                            className={`page-number ${activePage === i + 1 ? 'active' : ''}`}
                        >
                            <a href={`#pagi` + i + 1} onClick={(e) => sePageHander(i + 1, e)} id={'pagi' + i + 1}>{i + 1}</a></li>
                    })}
                </ul>
                <span className="page-number prev next-pagination"><span onClick={setToNextPage}>&raquo;</span></span>
            </div>}
        </>
    );
};
export default Movie;
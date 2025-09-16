import React from 'react';
import './style.scss';
import usePaginationStore from '../../../store/paginationSlice';

const Pagination = () => {
    const { currentPage, totalPages, setCurrentPage, prevPage, nextPage } = usePaginationStore();

    const pagesPerGroup = 10;
    const currentGroup = Math.floor((currentPage - 1) / pagesPerGroup);
    const startPage = currentGroup * pagesPerGroup + 1;
    const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) pages.push(i);

    return (
        <ul className="pagination">
            <li className="prev">
                <button onClick={prevPage} disabled={currentPage === 1}>
                    <img src="/images/streaming/bg_prev.png" alt="prev" />
                </button>
            </li>

            {pages.map((page) => (
                <li key={page} className={`page ${page === currentPage ? 'on' : ''}`}>
                    <button onClick={() => setCurrentPage(page)}>{page}</button>
                </li>
            ))}

            <li className="next">
                <button onClick={nextPage} disabled={currentPage === totalPages}>
                    <img src="/images/streaming/bg_next.png" alt="next" />
                </button>
            </li>
        </ul>
    );
};

export default Pagination;

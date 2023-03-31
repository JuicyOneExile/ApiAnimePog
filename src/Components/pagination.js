import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagination ({data, setPage, page, setCurrentPage, currentPage}) {
    const [windowSize, setWindowSize] = useState({
        width: undefined
    });

    useEffect(() => {
        setWindowSize({
            width: window.innerWidth
        });

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowSize.width <= 768;
    const pageRangeDisplayed = isMobile ? 1 : 3; // show fewer pages on mobile

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={(e) => {
                console.log("last_visible_page:", data?.pagination?.last_visible_page);
                console.log("selected page:", e.selected + 1);
                setPage(e.selected + 1);
                setCurrentPage(e.selected + 1);
            }}
            pageRangeDisplayed={pageRangeDisplayed}
            pageCount={data?.pagination?.last_visible_page}
            previousLabel="previous"
            renderOnZeroPageCount={null}
            activeClassName={'item active '}
            breakClassName={'item break-me '}
            containerClassName={`pagination ${isMobile ? 'pagination-wrap' : ''}`}
            disabledClassName={'disabled-page'}
            marginPagesDisplayed={1}
            nextClassName={"item next "}
            pageClassName={'item pagination-page '}
            previousClassName={"item previous"}

        />
    );
}
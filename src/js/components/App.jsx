import React, { useState } from 'react';

import ReactPageScroller from "react-page-scroller";
import FirstScreen from './FirstScreen/FirstScreen';

export default () => {
    const [currentPage, setCurrentPage] = useState(0)
    const handlePageChange = (index) => {
        setCurrentPage(index);
    }
    return (
        <ReactPageScroller
            pageOnChange={handlePageChange}
            customPageNumber={currentPage}
        >
            <FirstScreen />
            <FirstScreen />
        </ReactPageScroller>
    )
}
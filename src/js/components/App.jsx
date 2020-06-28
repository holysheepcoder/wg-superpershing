import React, { useState } from 'react';

import ReactPageScroller from "react-page-scroller";
import FirstScreen from './FirstScreen/FirstScreen';
import SecondScreen from './SecondScreen/SecondScreen';

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
            <FirstScreen onChangeScreen={setCurrentPage} />
            <SecondScreen />
        </ReactPageScroller>
    )
}
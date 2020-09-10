import React from 'react';
import PropTypes from 'prop-types';

const GridGift = ({url, id, category }) => {
    return (
        <div className='tw-rounded-lg tw-overflow-hidden tw-shadow-lg'>
            <img class="tw-w-full tw-h-full" width="300px" height='250' src={url} key={id} alt={category}/>
        </div>
    );
};

GridGift.propTypes = {
    url:PropTypes.string,
    id:PropTypes.string,
    category: PropTypes.string,
};

export default GridGift;
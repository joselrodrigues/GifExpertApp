import React from 'react';
import PropTypes from 'prop-types';
import useFetchGift from "../hooks/useFetchGift";
import GridGift from "./GridGift";


const GridGiftList = ({ category }) => {

    const {data, loading} = useFetchGift(category);
    return (
        <div className='tw-grid lg:tw-grid-cols-4 lg:tw-grid-rows-5 sm:tw-grid-cols-2 sm:tw-grid-rows-2 tw-gap-8'>
            {!loading && data.map((img) => {
                const {id, images:{downsized_medium:{url}}} = img;
                return(
                    <GridGift  url={url} category={category} id={id}/>
                )
            })}
        </div>
    );
};

GridGiftList.propTypes = {
    category:PropTypes.string
};

export default GridGiftList;
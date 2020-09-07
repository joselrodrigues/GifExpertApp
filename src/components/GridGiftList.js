import React from 'react';
import PropTypes from 'prop-types';
import useFetchGift from "../hooks/useFetchGift";


const GridGiftList = ({ category }) => {

    const {data, loading} = useFetchGift(category);
    return (
        <div>
            {/*{images:{fixed_height_small_still:{url}}, id}*/}
            {!loading && data.map((img) => {
                const {id, title, images:{downsized_medium:{url}}} = img;
                return(
                    <img src={url} key={id} alt={category}/>
                )
            })}
        </div>
    );
};

GridGiftList.propTypes = {
    category:PropTypes.string
};

export default GridGiftList;
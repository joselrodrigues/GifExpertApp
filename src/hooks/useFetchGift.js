import {useEffect, useState} from 'react';
import fetchGifts from '../api/index'

const useFetchGift = (category) => {
    const [state, setState] = useState({
        data:[],
        loading:true,
    })

    useEffect(() => {
        fetchGifts.get('',{
            params: {
                q:`${category}`
            }
        }).then(({ data:{data} }) => {
            setState({data, loading: false})
        })
    },[category])

    return state;
};

export default useFetchGift;
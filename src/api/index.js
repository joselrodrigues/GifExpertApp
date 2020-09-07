import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/search?api_key=EUHPsb9uH4vdfyIIT2L09yDC9aNP0Nx6&limit=20'
});
import axios from 'axios';

export const fetchImages = async (searchValue, page) => {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '33878200-75945f3143f242bd251e2a138';

    const responce = await axios.get(`${BASE_URL}?key=${KEY}&q=${searchValue}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`);
    return responce.data;
};
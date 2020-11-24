import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID HfbXzUSziELIbe6mVWo48GNOM8VqVyN-iQJ9uMuVweg'
    }
});
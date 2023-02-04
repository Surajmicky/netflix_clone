const API_KEY= 'cc2281e8de9a5947c3ce35e89ff2aab7';

const requests={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
    requestHorror:`https://api.themoviedb.org/3/movie?api_key=${API_KEY}&language=en-US&page=1&query=horror`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
}
export default requests;
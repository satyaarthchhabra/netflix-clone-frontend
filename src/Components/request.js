const apiKey="3ac8560ba5e82fe2cfffb3e67b0fc058";
const requests={
    fetchTrending:`/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOrignal:`/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovie:`/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovie:`/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovie:`/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovie:`/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${apiKey}&with_genres=99`,
}
export default requests
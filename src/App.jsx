import React,{useEffect,useState} from 'react';
import './App.css';
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Row from './Components/Row'
import requests from './Components/request'

function App() {
  return (
    <div className="app">
      {/* navbar */}
      {/* banner is here */}
<Banner/>
<Row title="NETFLIX ORIGNALS"  isLargeRow  fetchUrl={requests.fetchNetflixOrignal}/>
<Row title="Trending Now"       fetchUrl={requests.fetchTrending}/>
<Row title="Top Rated"          fetchUrl={requests.fetchTopRated}/>
<Row title="Action Movies"      fetchUrl={requests.fetchActionMovie}/>
<Row title="Comedy Movies"      fetchUrl={requests.fetchComedyMovie}/>
<Row title="Horror Movies"      fetchUrl={requests.fetchHorrorMovie}/>
<Row title="Romance Movies"     fetchUrl={requests.fetchRomanceMovie}/>

</div>
  );
}

export default App;

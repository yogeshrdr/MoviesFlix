import React from 'react';
import './App.css';
import Row from './Components/Movie/Movie';
import requests from './Components/Api/requests';
import Banner from './Components/Banner/Banner';
import Nav from './Components/Nav/Nav';

function App() {
	return (
		<div className="app">
			<Nav />
			<Banner />
			<Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Amazon Prime" isLargeRow fetchUrl={requests.fetchAmazonPrime} />
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
		</div>
	);
}

export default App;
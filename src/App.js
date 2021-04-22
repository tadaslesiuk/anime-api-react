import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Pages/Home/Home';

function App() {
    const [animeList, setAnimeList] = useState([]);
    const [topAnimeList, setTopAnimeList] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const getTopAnime = async () => {
        const list = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        .then(res => res.json());

        setTopAnimeList(list.top.slice(0, 5));
    }

    const fetchAnime = async (searchQuery) => {
        const list = await fetch(`https://api.jikan.moe/v3/search/anime?q=${searchQuery}&order_by=title&sort=asc&limit=10`)
        .then(res => res.json());

        setAnimeList(list.results);
    }

    const searchHandler = (e) => {
        e.preventDefault();
        fetchAnime(searchQuery);
    }

    useEffect(() => {
        getTopAnime();
    }, []);

	return (
		<div className="App">
			<Header />
            <div className="content-wrap">
                <Sidebar topAnimeList={topAnimeList} />
                <Home
                    searchHandler={searchHandler}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    animeList={animeList}
                />
            </div>
		</div>
	);
}

export default App;

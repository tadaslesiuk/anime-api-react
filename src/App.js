import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';

function App() {
    const [animeList, setAnimeList] = useState([]);
    const [topAnimeList, setTopAnimeList] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchedFor, setSearchedFor] = useState("");

    const getTopAnime = async () => {
        const list = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
            .then(res => res.json());

        setTopAnimeList(list.top.slice(0, 10));
    }

    const fetchAnime = async (searchQuery) => {
        const list = await fetch(`https://api.jikan.moe/v3/search/anime?q=${searchQuery}&order_by=title&sort=asc&limit=25`)
            .then(res => res.json());

        setAnimeList(list.results);
    }

    const searchHandler = (e) => {
        e.preventDefault();
        fetchAnime(searchQuery);
        setSearchedFor(searchQuery);
    }

    useEffect(() => {
        getTopAnime();
    }, []);

    return (
        <div className="App">
            <Header
                searchHandler={searchHandler}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                searchedFor={searchedFor}
                setSearchedFor={setSearchedFor}
            />
            <Home
                searchedFor={searchedFor}
                animeList={animeList}
                topAnimeList={topAnimeList}
            />
        </div>
    );
}

export default App;

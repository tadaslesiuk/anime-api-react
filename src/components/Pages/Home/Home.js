import React from 'react';
import AnimeCard from '../../AnimeCard/AnimeCard';

function Home(props) {
    return (
        <main>
            <div className="main-head">
                <form
                    className="search-box"
                    onSubmit={props.searchHandler}
                >
                    <input
                        type="search"
                        placeholder="What anime are you looking for?"
                        value={props.searchQuery}
                        required
                        onChange={e => props.setSearchQuery(e.target.value)}
                    />
                </form>
            </div>

            <hr />

            <div className="anime-list">
                {props.animeList.map(anime => (
                    <AnimeCard
                        anime={anime}
                        key={anime.mal_id}
                    />
                ))}
            </div>
        </main>
    )
}

export default Home

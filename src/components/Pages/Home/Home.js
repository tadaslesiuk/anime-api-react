import React from 'react';
import AnimeCard from '../../AnimeCard/AnimeCard';

function Home(props) {
    return (
        <main className="mx-2">
            {/* How many results are shown */}
            {
                props.animeList.length > 0 ?
                    <div>
                        <hr className="mx-2 mb-2" />
                        <div className="mx-2">
                            <h6>Showing {props.animeList.length} results for <q>{props.searchedFor}</q>.</h6>
                        </div>
                        <hr className="mx-2 my-2" />
                    </div>
                    :
                    <div>
                        <hr className="mx-2 mb-2" />
                        <div className="mx-2">
                            <h6>Showing TOP 10 anime.</h6>
                        </div>
                        <hr className="mx-2 my-2" />
                    </div>
            }

            {/* Search results (shows top 5 anime by default) */}
            {
                props.animeList.length > 0 ?
                    <div className="d-flex flex-wrap justify-content-start">
                        {props.animeList.map(anime => (
                            <AnimeCard
                                anime={anime}
                                key={anime.mal_id}
                            />
                        ))}
                    </div>
                    :
                    <div className="d-flex flex-wrap justify-content-start">
                        {props.topAnimeList.map(anime => (
                            <AnimeCard
                                anime={anime}
                                key={anime.mal_id}
                            />
                        ))}
                    </div>
            }
        </main >
    )
}

export default Home

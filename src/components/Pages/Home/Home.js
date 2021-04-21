import React from 'react';
import AnimeCard from '../../AnimeCard/AnimeCard';

function Home(props) {
    return (
        <main>
            <hr className="mx-2 my-0" />

            <div className="row">
                <div className="col-4">
                    <form
                        className=""
                        onSubmit={props.searchHandler}
                    >
                        <div className="input-group my-2 mx-2">
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search anime..."
                                value={props.searchQuery}
                                required
                                onChange={e => props.setSearchQuery(e.target.value)}
                            />
                            <div className="input-group-prepend">
                                <button className="btn btn-primary ml-0" type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <hr className="mx-2 my-0" />

            <div className="d-flex flex-wrap justify-content-start">
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

import React from 'react';

function Sidebar({ topAnimeList }) {
    return (
        <aside className="jumbotron jumbotron-fluid">
            <h3 className="ml-3 mb-3">
                <strong>Top Anime</strong>
            </h3>
            <div className="list-group">
                {topAnimeList.map(anime => (
                    <a
                        href={anime.url}
                        target="_blank"
                        rel="noreferrer"
                        key={anime.mal_id}
                        className="list-group-item list-group-item-action"
                    >
                        <div className="d-flex justify-content-between align-items-center">
                            {anime.title}
                            <span className="badge badge-success badge-pill ml-2">
                                <i class="fas fa-star pr-1"></i>
                                {anime.score}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </aside>
    )
}

export default Sidebar

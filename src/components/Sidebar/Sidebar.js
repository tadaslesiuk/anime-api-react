import React from 'react';

function Sidebar({ topAnimeList }) {
    return (
        <aside>
            <nav>
                <h3>Top Anime</h3>
                {topAnimeList.map(anime => (
                    <a
                        href={anime.url}
                        target="_blank"
                        rel="noreferrer"
                        key={anime.mal_id}
                    >{anime.title}
                    </a>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar

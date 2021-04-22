import React from 'react';

function AnimeCard({ anime }) {
    return (
        <div
            className="card mx-2 my-3 py-0"
            style={{ width: "18rem" }}
        >

            {/* Image */}
            <img
                src={anime.image_url}
                alt={anime.title + ' Image'}
                className="card-img-top"
                style={{ height: "350px" }}
            />

            {/* Title */}
            <div className="card-body d-flex align-items-center text-center justify-content-center">
                <h5 className="card-title mb-0">
                    <strong>{anime.title}</strong>
                </h5>
            </div>

            {/* Card footer */}
            <div className="align-bottom d-grid mx-3 mb-3">
                {/* Feature list */}
                <ul className="list-group mb-3">
                    {/* Type */}
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <i className="fas fa-tv"></i>
                            Type
                            <span className="badge bg-primary rounded-pill">
                            {anime.type}
                        </span>
                    </li>

                    {/* Number of episodes */}
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <i className="fas fa-film"></i>
                            Episodes
                            <span className="badge bg-primary rounded-pill">
                            {anime.episodes}
                        </span>
                    </li>

                    {/* PG Rating */}
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <i className="fas fa-users"></i>
                            PG Rating
                            <span className="badge bg-primary rounded-pill">
                            {anime.rated ? anime.rated : "No rating"}
                        </span>
                    </li>

                    {/* Score */}
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <i className="fas fa-star"></i>
                            Score
                            <span className="badge bg-success rounded-pill">
                            {anime.score}
                        </span>
                    </li>
                </ul>

                {/* More details button */}
                <div className="d-grid">
                    <a
                        type="button"
                        href={anime.url}
                        className="btn btn-secondary btn-block"
                        target="_blank"
                        rel="noreferrer"
                    >More details
                    </a>
                </div>
            </div>
        </div >
    )
}

export default AnimeCard

import Logo from '../../assets/images/logo.png';

const Header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/" className="navbar-brand">
                    <img src={Logo} alt="Logo" height="56px" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="https://jikan.moe/" target="_blank" rel="noreferrer">Jikan API</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/genres" tabIndex="-1" aria-disabled="true">Genres</a>
                        </li>
                    </ul>
                    <form
                        className="form-inline my-2 my-lg-0"
                        onSubmit={props.searchHandler}
                    >
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search for anime"
                            required
                            value={props.searchQuery}
                            onChange={e => props.setSearchQuery(e.target.value)}
                        />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;
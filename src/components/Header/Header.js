import Logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <header>
            <div className="row justify-content-start ml-2">
                <img src={Logo} alt="Logo" height="150px" />
                {/* <h1>The<strong>Anime</strong>Database</h1> */}
            </div>
        </header>
    );
}

export default Header;
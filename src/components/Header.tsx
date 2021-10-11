import "./Header.css";

const Header = () => {
    return (
        <header className='flex flex-row justify-around'>
            <button className="sosmed_button">
                <a href='#home'>
                    Home
                </a>
            </button>
            <button className="sosmed_button">
                <a href='#joinclan'>
                    Mint
                </a>
            </button>
            <button className="sosmed_button">
                <a href='#journey'>
                    Journey
                </a>
            </button>
            <button className="sosmed_button">
                <a href='#roadmap'>
                    Roadmap
                </a>
            </button>
            <button className="sosmed_button">
                <a href='#team'>
                    Team
                </a>
            </button>
        </header>
    );
};

export default Header;
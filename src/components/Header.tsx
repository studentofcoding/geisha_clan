import AnchorLink from 'react-anchor-link-smooth-scroll'
import "./Header.css";

const Header = () => {
    return (
        <div>

        <header className='flex flex-row justify-around'>
            <button className="sosmed_button">
                <AnchorLink href='#home'>Home</AnchorLink>
            </button>
            <button className="sosmed_button">
                <AnchorLink href='#journey'>Journey</AnchorLink>
            </button>
            <button className="sosmed_button">
                <AnchorLink href='#joinclan'>Mint</AnchorLink>
            </button>
            <button className="sosmed_button">
                <AnchorLink href='#roadmap'>Roadmap</AnchorLink>
            </button>
            <button className="sosmed_button">
                <AnchorLink href='#team'>Team</AnchorLink>
            </button>
        </header>
        <div className="flex flex-row justify-around menu-mobile">
            <button className="sosmed_button">
                <AnchorLink href='#journey'>Journey</AnchorLink>
            </button>
            <button className="sosmed_button">
                <AnchorLink href='#roadmap'>Roadmap</AnchorLink>
            </button>
            <button className="sosmed_button">
                <AnchorLink href='#team'>Team</AnchorLink>
            </button>
        </div>
        </div>
    );
};

export default Header;
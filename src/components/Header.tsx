import "./Header.css";
import { FaDiscord } from 'react-icons/fa';
import { Button } from "@material-ui/core";
// import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='flex flex-row justify-around'>
            <a href='#home'>
                <Button variant="text">Home</Button>
            </a>
            <a href='#journey'>
                <Button variant="text">Journey</Button>
            </a>
            <a href='#theclan'>
                <Button variant="text">Clan</Button>
            </a>
        </header>
    );
};

export default Header;
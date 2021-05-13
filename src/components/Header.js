import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className="header">
            <MenuIcon />
            <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="youtube-logo" />

            <input type="text" />
        </div>
    )
}

export default Header

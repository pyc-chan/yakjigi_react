import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <Link to="/">홈</Link> 
            <Link to="/Sub104">sub104</Link> 
            <Link to="/Sub303">sub303</Link> 
        </header>
    );
}


export default Header;
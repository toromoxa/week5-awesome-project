import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Users">Users</Link>
        </nav>
    );
}

export default Nav
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/sheets" style={styles.link}>
            Sheets
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/transitions" style={styles.link}>
            Transitions
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/user" style={styles.link}>
            User
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Estilos básicos para o Navbar
const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  li: {
    margin: '0 15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;
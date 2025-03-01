import { Link } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';





const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>
           <Button variant="contained" startIcon={<HomeIcon />}>Home</Button>
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/sheets" style={styles.link}>
            <Button variant="contained" startIcon={<ListAltIcon />}>Sheets</Button>
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/transitions" style={styles.link}>
            <Button variant="contained" startIcon={<TransitEnterexitIcon />}>Transitions</Button>
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/user" style={styles.link}>
          <IconButton aria-label="delete" color='primary'>
              <AccountCircleIcon />
          </IconButton>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#3333',
    padding: '10px',
    borderRadius: '10px',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
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
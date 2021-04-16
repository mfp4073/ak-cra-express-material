import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from '../logo.png';

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;


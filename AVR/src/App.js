import 'react-perfect-scrollbar/dist/css/styles.css';
import {useRoutes} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import routes from './routes';
import './App.css';
import {AuthProvider} from './contexts/AuthContext'

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>      
      <AuthProvider>
        {routing}
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
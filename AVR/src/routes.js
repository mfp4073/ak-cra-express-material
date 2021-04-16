import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import LoadingScreen from './components/LoadingScreen';
import AuthGuard from './components/authentication/AuthGuard';
import { AuthConsumer } from './contexts/AuthContext'

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// Dashboard 
const Dashboard = Loadable(lazy(() => import('./pages/Dashboard')));

// AUTH PAGES
const Login = Loadable(lazy(() => import('./pages/authentication/Login')));


// ERROR PAGES
const NotFound = Loadable(lazy(() => import('./pages/NotFound')));
console.log("PROP")

const routes = [
  {
    path: 'dashboard',
    element: (
      <AuthConsumer>
      {({ isAuth }) => (
        <AuthGuard isAuth>
          <DashboardLayout />
        </AuthGuard>
      )}
      </AuthConsumer>
    ),
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;



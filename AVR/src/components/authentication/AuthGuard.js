import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from '../../pages/authentication/Login';

const AuthGuard = (props) => {
  console.log("AUTH GUARD")
  const { children } = props;
  const auth = props.isAuth; /// 
  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);
  console.log("PROPS ", props.isAuth)
  if (!auth) {
    if (location.pathname !== requestedLocation) {
      console.log("req: ", requestedLocation);
      console.log("loc: ", location.pathname);
      console.log("auth: ", auth);      
      setRequestedLocation(location.pathname);
    }

    return <Login />;
  }

  // This is done so that in case the route changes by any chance through other
  // means between the moment of request and the render we navigate to the initially
  // requested route.
  if (requestedLocation && location.pathname !== requestedLocation) {
    console.log("req2: ", requestedLocation);
    console.log("loc2: ", location.pathname);
    console.log("auth2: ", auth);
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }
  return <>{children}</>;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

export default AuthGuard;

import React from 'react';

const AuthContext = React.createContext({
    loggedIn: false,
    user: ''
});
  
export default AuthContext;
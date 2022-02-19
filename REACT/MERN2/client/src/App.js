import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRotes } from './routes';
import { useAuth } from './hooks/auth.hook';
import 'materialize-css';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';

function App() {
  const { login, logout, token, userId, ready } = useAuth();
  //stugum enq usery login exata te che
  const isAuthenticated = !!token;
  //poxanchum enq routes dashtin vor imananq ete login exat chi vor componentnery cuych tanq vory che
  const routes = useRotes(isAuthenticated);

  if (!ready) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        token,
        userId,
        isAuthenticated,
      }}
    >
      <Router>
        {/*ete login exata navbary cuych ta*/}
        {isAuthenticated && <Navbar />}
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

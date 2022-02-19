import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LincsPage } from './pages/LincsPage';
import { CreatePage } from './pages/CreatePage';
import { DetailPage } from './pages/DetailPage';
import { AuthPage } from './pages/AuthPage';

export const useRotes = (isAuthenticated) => {
  // ete login exata  cuych ta es
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <LincsPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/detail/:id" exact>
          <DetailPage />
        </Route>
        {/*ete haseyi dashtum sxal hasce grvi vory chka saytum gna create */}
        <Redirect to="/create" />
      </Switch>
    );
  }
  // ete login exat chi cuych ta es
  return (
    <Switch>
      <Route path="/">
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

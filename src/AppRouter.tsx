import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { HomeScreen } from "./screens/HomeScreen";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path="/"
          component={HomeScreen}
        />
      </Switch>
    </Router>
  );
};

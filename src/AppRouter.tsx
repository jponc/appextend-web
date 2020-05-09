import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { HomeScreen } from "./screens/HomeScreen";
import { RulesScreen } from "./screens/RulesScreen";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path="/"
          component={HomeScreen}
        />
        <Route
          exact={true}
          path="/rules"
          component={RulesScreen}
        />
      </Switch>
    </Router>
  );
};

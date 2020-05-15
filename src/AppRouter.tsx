import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { RulesScreen } from "./screens/RulesScreen";
import { InvoiceScreen } from "./screens/InvoiceScreen";
import { VendorsScreen } from "./screens/VendorsScreen";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={HomeScreen} />
        <Route exact={true} path="/rules" component={RulesScreen} />
        <Route exact={true} path="/vendors" component={VendorsScreen} />
        <Route
          exact={true}
          path="/invoices/:invoiceId"
          component={InvoiceScreen}
        />
      </Switch>
    </Router>
  );
};

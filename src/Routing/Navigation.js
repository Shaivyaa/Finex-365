import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import * as Routes from "../Routes/Routes"

export default function Navigation() {
  const Dashboard = lazy(()=> import("../Pages/Dashboard/Dashboard"))
  return (
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route component={Dashboard} path={Routes.DASHBOARD} />
        </Switch>
      </Suspense>
    </Router>
  )
}
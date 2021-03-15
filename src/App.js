import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import TopNavBar from './components/TopNavBar';
import CustomQuestions from './layouts/CustomQuestions';
import './App.scss';
import Privacy from './layouts/Privacy';
import routes from './constants/routes';
import Help from './layouts/Help';
import Terms from './layouts/Terms';

export default function App() {
  return (
    <Router>
      <TopNavBar />
      <Container className="page-container" fluid>
        <div className="page-body">
          <Switch>
            <Route path={routes.HOME} exact>
              <CustomQuestions />
            </Route>
            <Route path={routes.PRIVACY}>
              <Privacy />
            </Route>
            <Route path={routes.TERMS}>
              <Terms />
            </Route>
            <Route path={routes.HELP}>
              <Help />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Container>
    </Router>
  );
}

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Home from './components/home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Footer from './components/layout/Footer';
import ProfileSettings from './components/profile';
import Members from './components/members';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/update-profile" component={ProfileSettings} />
        <Route exact path="/members" component={Members} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Change from "./pages/Change/Change";
import Places from "./pages/Places/Places";
import FegComponent from "./pages/Feg/FegComponent";
import HelpAndAdvice from "./pages/HelpAndAdvice/HelpAndAdvice";
import Navbar from './components/Navbar new/Navbar';
import Clubs from "./pages/clubs/clubs";



const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Switch>
          <Route exact path="/club"  >
          <Clubs />
</Route>            
<Route exact path="/" component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/change' exact component={Change} />
            <Route path='/places' exact component={Places} />
            <Route path='/studentlife' exact component={FegComponent} />
            <Route path='/helpandadvice' exact component={HelpAndAdvice} />
            <Route path='/contact' exact component={Contact} />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
      </>
  );

}

export default App;

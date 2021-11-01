import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Change from "./pages/Change/Change";
import Places from "./pages/Places/Places";
import FegComponent from "./pages/Feg/FegComponent";
import HelpAndAdvice from "./pages/HelpAndAdvice/HelpAndAdvice";
import Navbar from "./components/NavbarNew/Navbar";
import Clubs from "./pages/clubs/clubs";
import Studentlife from "./pages/Studentlife/Studentlife";
import Senates from "./pages/Senates/Senates";
import tech_senate from "./components/Senates/tech_senate";
import cult_senate from "./components/Senates/cult_senate";
import sports_senate from "./components/Senates/sports_senate";
import Footer from './components/Footer/Footer'
import footer from './assets/images/footer.png'
import {Section} from './assets/home/scroll'
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ height: "10vh", width: "100%" }}></div>
        <main>
          <Switch>
            <Route exact path="/club">
              <Clubs />
            </Route>
            <Route exact path="/feg">
              <FegComponent />
            </Route>
            
              
            

            <Route path="/about" exact component={About} />
            <Route path="/change" exact component={Change} />
            <Route path="/places" exact component={Places} />
            <Route path="/studentlife" exact component={Studentlife} />
            <Route path="/helpandadvice" exact component={HelpAndAdvice} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/senates" exact component={Senates} />
            <Route path="/techsenate" exact component={tech_senate} />
            <Route path="/cultsenate" exact component={cult_senate} />
            <Route path="/sportssenate" exact component={sports_senate} />
            <Route exact path="/" component={Home} />
            <Route exact path="/test" component={Section} />
              
          </Switch>
        </main>
        
      </Router>
    </>
  );
};

export default App;

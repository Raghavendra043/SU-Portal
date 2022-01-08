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
import Signin from "./pages/signin/Signin";
import Footer from "./components/Footer/Footer";
import footer from "./assets/images/footer.png";
import { Section } from "./assets/home/scroll";
//import Footer from './components/Footer/Footer'
//import footer from './assets/images/footer.png'
import Typing1 from "./assets/home/scroll";
import TechSenate from "./components/Senates/TechSenate";
import CultSenate from "./components/Senates/CultSenate";
import SportsSenate from "./components/Senates/SportsSenate";
import FoodOutlets from "./pages/FoodOutlets/FoodOutlets";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ height: "10vh", width: "100%", background:"white"}}></div>
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
            <Route path="/techsenate" exact component={TechSenate} />
            <Route path="/cultsenate" exact component={CultSenate} />
            <Route path="/sportssenate" exact component={SportsSenate} />
            <Route path="/foodoutlets" exact component={FoodOutlets} />
            

            {/* <Redirect to="/" /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/test" component={Typing1} />

            <Route path="/login" exact component={Signin} />
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default App;

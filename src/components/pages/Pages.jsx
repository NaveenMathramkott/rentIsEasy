import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import AdminPanel from "../../ControlPanel/AdminPanel";
import UserPanel from "../../ControlPanel/UserPanel";
import Login from "../Login/Login";
import AuthContext from "../AuthContext/AuthContext";
const Pages = () => {
  return (
    <>
      <Router>
        <ScrollToTop>
          <AuthContext.Provider value="naveen">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/AdminPanel" component={AdminPanel} />
              <Route exact path="/UserPanel" component={UserPanel} />
            </Switch>
            <Footer />
          </AuthContext.Provider>
        </ScrollToTop>
      </Router>
    </>
  );
};

export default Pages;

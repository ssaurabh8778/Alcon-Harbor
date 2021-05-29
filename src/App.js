import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ChooseProducts from "./pages/ChooseProducts/ChooseProducts";
import Application from "./pages/Application/Application";
import About from "./pages/About/About";
import Footer from "./components/Footer";

import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import "fontsource-roboto";
import { AuthProvider } from "./AuthContext";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
function App() {
  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <Switch>
            <Route path="/about">
              <NavBar />
              <About />
              <Footer />
            </Route>

            <Route path="/log-in">
              <NavBar />
              <LogIn />
            </Route>

            <Route path="/sign-up">
              <NavBar />
              <SignUp />
            </Route>

            <Route path="/application">
              <NavBar />
              <Application />
            </Route>

            <Route path="/choose-products">
              <NavBar />
              <ChooseProducts />
            </Route>

            <Route path="/">
              <NavBar />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </StateProvider>
    </>
  );
}

export default App;

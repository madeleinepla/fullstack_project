import React from "react";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import GameIndexContainer from "./game/game_index_container";
import GameShowContainer from "./game/game_show_container";
import ListIndexContainer from "./list/list_index_container";
import CreateListFormContainer from "./list/create_list_form_container";
import { AuthRoute } from "../util/route_util";
import Home from "./home/home";
import Footer from "./footer/footer";

const App = () => (
  <div>
    

    <header>
      <NavBarContainer />
    </header>

    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/games" component={GameIndexContainer} />
        <Route path="/games/:gameId" component={GameShowContainer} />
        <Route exact path="/lists" component={ListIndexContainer} />
        <Route exact path="/lists/new" component={CreateListFormContainer} />
      </Switch>
    </div>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainAuthComponent from './components/auth_page/main_auth_component';
import SignIn from './components/auth_page/sign_in';
import SignUp from './components/auth_page/sign_up';
import App from './components/App';
import MainProfileComponent from './components/profile_page/main_profile_component';
import Geolocation from './components/geolocation/Geolocation'

const configureRoutes = () => {
      var loggedIn = true; //firebase.auth().currentUser != null;
      return (<div>
                <Geolocation/>
                <Switch>
                  <Route exact path="/" component={App} />
                  <Route path="/profile" component={MainProfileComponent}/>
                  <Route path="/authentication" component={MainAuthComponent}/>
                  <Route path="/sign_in" render={() => (!loggedIn ? (<Redirect to="/menu"/>) : (<SignIn/>))}/>
                  <Route path="/sign_up" render={() => (!loggedIn ? (<Redirect to="/menu"/>) : (<SignUp/>))}/>
                </Switch>
              </div>)
      }
export default configureRoutes

import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import TheLayout from './layouts/TheLayout';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

export const App = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={ loading }>
        <Switch>
          {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
          <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
          <Route 
            path="/"
            // name="Home"
            render={props => <TheLayout />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

// export default App;

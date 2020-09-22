import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routingArray from "../js-files/routing-array";


class App extends Component {
  render() {
    return (
        <div>
            <Switch>
             {routingArray.map(e => <Route key = {e.key} path = {e.pathWay} component={e.content} exact />)}
           </Switch>
        </div>
    );
  }
}
 
export default App;

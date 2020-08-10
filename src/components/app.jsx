import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routingArray from "../js-files/routing-array";


class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             {routingArray.map(e => <Route path= {e.pathWay} component={e.content} exact/>)}
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;


import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';




import UserFindContainer from './containers/UserFindContainer.jsx';
import { About } from './components/About/About.jsx';
import reducer from './reducers';
import { indexUrl, aboutUrl } from './constants/appUrls';



const browserHistoryMiddlware = routerMiddleware(browserHistory);
const store = createStore(
                          reducer,
                          composeWithDevTools(applyMiddleware(thunk, browserHistoryMiddlware))
);
const history = syncHistoryWithStore(hashHistory, store);



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={indexUrl} component={UserFindContainer} />
      <Route path={aboutUrl} component={About} />
    </Router>
  </Provider>,
  document.getElementById('app'));


export default store;

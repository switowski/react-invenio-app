import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store, { history } from './store'

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
document.getElementById('root'));
// import { createStore, combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'

// const rootReducer = combineReducers({
//   // ...your other reducers here
//   // you have to pass formReducer under 'form' key,
//   // for custom keys look up the docs for 'getFormState'
//   form: formReducer
// })

// const store = createStore(rootReducer)

// const dest = document.getElementById('root');


// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>
//   , dest);

registerServiceWorker();

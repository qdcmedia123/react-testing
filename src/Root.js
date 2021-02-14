import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "reducers";
import reduxPromise from 'redux-promise';
import asyn from './middlewares/async';
import stateValidator from 'middlewares/stateValidator';


export default ({children, initialState = {}}) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(asyn, stateValidator)
  );
  return (
    <Provider store={store}>{children}</Provider>
  );
};

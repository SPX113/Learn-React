import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import count from './reducers/count'

const reducers = combineReducers({
    count
});

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
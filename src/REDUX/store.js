import {createStore,combineReducers,applyMiddleware} from "redux";
import showMenuReducer from './Reducers/showMenuReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
   showMenu: showMenuReducer,
})

const store = createStore(rootReducer,applyMiddleware(thunk,logger));

export default store;

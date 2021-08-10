import {createStore, applyMiddleware, compose} from 'redux';
import recipeReducer from './reducer/index';
import thunk from 'redux-thunk';

const store = createStore(recipeReducer, compose(applyMiddleware(thunk)));
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
// const store = createStore(recipeReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
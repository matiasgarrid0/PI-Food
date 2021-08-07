import {createStore, applyMiddleware, compose} from 'redux';
import recipeReducer from './reducer/index';
import thunk from 'redux-thunk';

const store = createStore(recipeReducer, compose(applyMiddleware(thunk)));

export default store;
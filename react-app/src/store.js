import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk'

let initialState={
    num:7
}
let store=createStore(reducer,initialState,applyMiddleware(thunk));

export default store;
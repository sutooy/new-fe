// import { createStore, applyMiddleware } from 'redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'

const store = createStore(reducers, {}, applyMiddleware(thunk))

export default store

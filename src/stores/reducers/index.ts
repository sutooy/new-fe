import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import langReducer from './langReducer'
//import { customerReducer } from "./customerReducer";

const reducers = combineReducers({
  //allCustomers: customerReducer,
  auths: authReducer,
  lang: langReducer,
})

export default reducers

export type State = ReturnType<typeof reducers>

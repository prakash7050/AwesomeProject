
import { combineReducers, createStore } from 'redux';
import FormReducer from './reducers/formReducer';

const rootReducer = combineReducers({
    state: FormReducer,
});
 
export const store = createStore(rootReducer);
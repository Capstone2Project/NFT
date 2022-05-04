import {AuthReducer,EventReducer, initialParam, initialState} from './reducer';

const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce( // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

export const rootReducer = combineReducers({
    AuthReducer,
    EventReducer
 });

 export const combinedInitialState = () =>{
    return {
        auth:{...initialState},
        event:{...initialParam}  
    }
    }
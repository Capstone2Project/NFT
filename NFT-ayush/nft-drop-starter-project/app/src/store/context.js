import React,{useReducer} from "react";
import { combinedInitialState, rootReducer } from "./combineReducer";
 
const StoreStateContext = React.createContext();
// const StoreDispatchContext = React.createContext();

export function useStoreState() {
  const context = React.useContext(StoreStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }
 
  return context;
}
 
// export function useStoreDispatch() {
//   const context = React.useContext(StoreDispatchContext);
//   if (context === undefined) {
//     throw new Error("useAuthDispatch must be used within a AuthProvider");
//   }
 
//   return context;
// }

export const StoreProvider = ({ children }) => {
    // const [user, dispatch] = useReducer(AuthReducer, initialState);
    let combinedInitialState1 = combinedInitialState()
    const [state, dispatch] = useReducer(rootReducer,{
      ...combinedInitialState1
    } );
    // Important(!): memoize array value. Else all context consumers update on *every* render
    const store = React.useMemo(() => [state, dispatch], [state]);
    return (
      <StoreStateContext.Provider value={store}>
          {children}
      </StoreStateContext.Provider>
    );
  };     

  
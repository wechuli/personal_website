import React,{useState,createContext} from 'react';


export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    return (
  <AuthContext.Provider value={{}}>
{props.children}

  </AuthContext.Provider>
    )
}

import React, { useState, createContext } from "react";

export const ArticlesContext = createContext();

export const ArticlesContextProvider = props => {
  return (
    <ArticlesContext.Provider value={{}}>
      {props.children}
    </ArticlesContext.Provider>
  );
};

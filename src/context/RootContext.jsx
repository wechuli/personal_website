import React from "react";
import { AuthContextProvider } from "./AuthContext";
import { ProjectsContextProvider } from "./ProjectsContext";
import { ArticlesContextProvider } from "./ArticlesContext";

const RootContextProvider = props => {
  return (
    <AuthContextProvider>
      <ProjectsContextProvider>
        <ArticlesContextProvider>{props.children}</ArticlesContextProvider>
      </ProjectsContextProvider>
    </AuthContextProvider>
  );
};

export default RootContextProvider;

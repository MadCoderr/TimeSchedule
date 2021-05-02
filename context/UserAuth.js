//Import Libraires
import React, { createContext, useState, useEffect } from "react";

//Import Firebase
import firebase from "../lib/firebase";

//Create Context
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signOut = () => firebase.auth().signOut();

  const signUp = (_email, _password) =>
    firebase.auth().createUserWithEmailAndPassword(_email, _password);

  const signIn = (_email, _password) =>
    firebase.auth().signInWithEmailAndPassword(_email, _password);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signOut,
        signUp,
        signIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import Loading from "./../Components/Loading";
import UserGuestScreen from "./../Components/Account/UserGuest";
import UserLoggedScreen from "./../Components/Account/UserLogged";

export default function MyAccount() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      //console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  console.log(login);

  if (login === null) {
    return <Loading isVisible={true} text="Cargando..." />;
  }
  return login ? <UserLoggedScreen /> : <UserGuestScreen />;
}

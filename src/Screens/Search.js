import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import Loading from "./../Components/Loading";
import { StyleSheet, View, Text } from "react-native";
// import all basic components

export default function Search() {
  const [login, setLogin] = useState(null);
  const [displayName, setdisplayName] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) {
    return <Loading isVisible={true} text="Cargando..." />;
  }
  return login ? (
    <SearchLogged user={displayName} />
  ) : (
    <SearchGuest user={displayName} />
  );
}

function SearchGuest(props) {
  const { user } = props;
  return (
    <View style={styles.containerColum}>
      <View style={styles.containerRow}>
        <Text style={styles.welcome}>Welcome to React Native {user}</Text>
      </View>
    </View>
  );
}

function SearchLogged(props) {
  const { user } = props;

  return (
    <View style={styles.containerColum}>
      <View style={styles.containerRow}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.welcome}>Native</Text>
      </View>
      <View style={styles.containerRow}>
        <Text style={styles.welcome}>Welcome to React Native: {user}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRow: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#F5FCFF",
  },
  containerColum: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: "orange",
    margin: 10,
    textAlign: "center",
  },
});

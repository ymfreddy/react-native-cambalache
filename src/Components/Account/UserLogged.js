import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import * as firebase from "firebase";
import InfoUser from "../../Components/Account/InfoUser";
import Loading from "../../Components/Loading";
import { STYLESAPP } from "./../../Constants/StylesApp";

export default function UserLogged() {
  const [userInfo, setUserInfo] = useState({});
  const [reloadData, setReloadData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [textLoading, setTextLoading] = useState("");
  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      setUserInfo(user.providerData[0]);
    })();
    setReloadData(false);
  }, [reloadData]);
  return (
    <ScrollView style={styles.viewBody} centerContent={true}>
      <InfoUser
        userInfo={userInfo}
        setReloadData={setReloadData}
        setIsLoading={setIsLoading}
        setTextLoading={setTextLoading}
      />
      <View style={styles.viewBtn}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => firebase.auth().signOut()}
        >
          <Text style={styles.text}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>

      <Loading text={textLoading} isVisible={isLoading} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    backgroundColor: STYLESAPP.APP_BACKGROUND_COLOR,
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btn: {
    width: 200,
    height: 45,
    borderRadius: 25,
    backgroundColor: STYLESAPP.BUTTON_BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  text: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
    textAlign: "center",
  },
});

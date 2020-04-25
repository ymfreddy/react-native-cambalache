import React, { useState } from "react";
import { SocialIcon } from "react-native-elements";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import { FacebookApi } from "../../Utils/Social";
import Loading from "../Loading";
import { Toast } from "native-base";

export default function LoginFacebook(props) {
  const { navigation } = props;
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);

  async function login() {
    console.log("iniciar con facebook");
    try {
      console.log(FacebookApi.aplication_id);
      await Facebook.initializeAsync(FacebookApi.application_id); // Aqui necesitamos el APP Id
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: FacebookApi.permissions,
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        console.log("Logged in!");
        setIsVisibleLoading(true);
        const credentials = firebase.auth.FacebookAuthProvider.credential(
          token
        );
        await firebase
          .auth()
          .signInWithCredential(credentials)
          .then(() => {
            navigation.navigate("Principal");
          })
          .catch(() => {
            Toast.show({
              text: "error iniciando sesion con facebook",
              type: "error",
              position: "top",
            });
          });
      } else {
        // type === 'cancel'
        console.log("Inicio de session cancelado");
        Toast.show({
          text: "Inicio de session cancelado",
          position: "top",
        });
      }
    } catch ({ message }) {
      console.log(message);
      Toast.show({
        text: "Error accediendo Facebook, intente más tarde: " + message,
        type: "error",
        position: "top",
      });
    }
    setIsVisibleLoading(false);
  }

  return (
    <>
      <SocialIcon
        title="Iniciar con facebook"
        button
        type="facebook"
        onPress={login}
      />
      <Loading text="iniciando sesion" isVisible={isVisibleLoading} />
    </>
  );
}

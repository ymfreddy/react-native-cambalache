import React from "react";
import { StyleSheet, ImageBackground, Image, View, Text } from "react-native";
//import { LoginFacebook } from "../Components/Account/LoginFacebook";

import { IMAGE } from "../Constants/Images";
import LoginForm from "../Components/Account/LoginForm";
import { Root } from "native-base";
import LoginFacebook from "../Components/Account/LoginFacebook";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <Root>
        <ImageBackground
          source={IMAGE.IMAGE_BACKGROUND}
          style={styles.backgroundContainer}
        >
          <View style={styles.logoContainer}>
            <Image source={IMAGE.IMAGE_LOGO} style={styles.logo} />
            <Text style={styles.logoText}>CAMBALACHE APP!</Text>
          </View>

          <View style={styles.viewContainer}>
            <LoginForm />
          </View>
          <View style={styles.viewContainer}>
            <LoginFacebook />
          </View>
        </ImageBackground>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    width: null,
    height: null,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  viewContainer: {
    marginTop: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5,
  },
});

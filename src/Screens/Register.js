import React, { Component } from "react";
import { StyleSheet, ImageBackground, Image, View, Text } from "react-native";
import { Root } from "native-base";
import { IMAGE } from "../Constants/Images";
import RegisterForm from "../Components/Account/RegisterForm";

export default class Register extends Component {
  constructor(props) {
    super(props);
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
            <RegisterForm />
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
    marginTop: 10,
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

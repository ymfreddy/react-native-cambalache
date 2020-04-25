import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "native-base";
import CustomHeader from "../Components/CustomHeader";
import UserLogged from "../Components/Account/UserLogged";
import { STYLESAPP } from "./../Constants/StylesApp";

export default class Principal extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          isHome={true}
          title="Principal"
          navigation={this.props.navigation}
        />
        <View style={styles.backgroundContainer}>
          <UserLogged></UserLogged>
        </View>
      </View>
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
    backgroundColor: STYLESAPP.APP_BACKGROUND_COLOR,
  },
});

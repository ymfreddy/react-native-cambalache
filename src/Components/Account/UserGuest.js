import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import { STYLESAPP } from "./../../Constants/StylesApp";

function UserGuest(props) {
  const { navigation } = props;

  return (
    <ScrollView style={styles.viewBody} centerContent={true}>
      <Image
        source={require("../../../assets/images/user-guest.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Usuario invitado</Text>
      <Text style={styles.description}>bienvenido!!!.</Text>
      <View style={styles.viewBtn}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.text}>Iniciar Session</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default withNavigation(UserGuest);

const styles = StyleSheet.create({
  viewBody: {
    backgroundColor: STYLESAPP.APP_BACKGROUND_COLOR,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btn: {
    width: "70%",
    height: 50,
    borderRadius: 25,
    backgroundColor: STYLESAPP.BUTTON_BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

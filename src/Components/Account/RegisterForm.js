import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { validateEmail } from "../../Utils/Validation";
import * as firebase from "firebase";
import Loading from "../Loading";
import { withNavigation } from "react-navigation";
import { Toast } from "native-base";
import { STYLESAPP } from "./../../Constants/StylesApp";
const { width: WIDTH } = Dimensions.get("window");

function RegisterForm(props) {
  const { navigation } = props;
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePasswordRepeat, setHidePasswordRepeat] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);

  const register = async () => {
    setIsVisibleLoading(true);
    if (!email || !password || !passwordRepeat) {
      Toast.show({
        text: "todos los datos deben estar llenos",
        type: "error",
        position: "top",
      });
    } else if (!validateEmail(email)) {
      Toast.show({
        text: "el email no es correcto",
        type: "warning",
        position: "top",
      });
    } else if (password != passwordRepeat) {
      Toast.show({
        text: "las claves no coinciden",
        type: "warning",
        position: "top",
      });
    } else {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate("Principal");
        })
        .catch((error) => {
          Toast.show({
            text: "error en el registro: " + error,
            type: "warning",
            position: "top",
          });
        });
    }
    setIsVisibleLoading(false);
  };

  goBack = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Icon
          name={"ios-person"}
          size={28}
          color={"rgba(255,255,255,0.7)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.inputText}
          placeholder="correo electronico"
          value={email}
          onChange={(e) => setEmail(e.nativeEvent.text)}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          underLineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon
          name={"ios-lock"}
          size={28}
          color={"rgba(255,255,255,0.7)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.inputText}
          placeholder="contraseña"
          value={password}
          onChange={(e) => setPassword(e.nativeEvent.text)}
          secureTextEntry={hidePassword}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          underLineColorAndroid="transparent"
        />
        <TouchableOpacity
          style={styles.btnEye}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Icon
            name={hidePassword ? "ios-eye" : "ios-eye-off"}
            size={26}
            color={"rgba(255,255,255,0.7)"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Icon
          name={"ios-lock"}
          size={28}
          color={"rgba(255,255,255,0.7)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Repetir Contraseña"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.nativeEvent.text)}
          secureTextEntry={hidePasswordRepeat}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          underLineColorAndroid="transparent"
        />
        <TouchableOpacity
          style={styles.btnEye}
          onPress={() => setHidePasswordRepeat(!hidePasswordRepeat)}
        >
          <Icon
            name={hidePasswordRepeat ? "ios-eye" : "ios-eye-off"}
            size={26}
            color={"rgba(255,255,255,0.7)"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={register}>
          <Text style={styles.text}>Unirse</Text>
        </TouchableOpacity>

        <TouchableHighlight style={styles.btn} onPress={goBack}>
          <Text style={styles.text}>Cancelar</Text>
        </TouchableHighlight>
      </View>
      <Loading text="Creando usuario" isVisible={isVisibleLoading} />
    </View>
  );
}

export default withNavigation(RegisterForm);

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 30,
  },
  inputText: {
    color: "#fff",
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    marginHorizontal: 25,
  },
  inputIcon: {
    position: "absolute",
    top: 10,
    left: 37,
  },
  inputContainer: {
    marginTop: 10,
  },
  btnContainer: {
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
  },
  btnEye: {
    position: "absolute",
    top: 10,
    right: 37,
  },
  btn: {
    width: "100%",
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

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
const { width: WIDTH } = Dimensions.get("window");
import { STYLESAPP } from "./../../Constants/StylesApp";

function LoginForm(props) {
  const { navigation } = props;
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("ymfreddy@gmail.com");
  const [password, setPassword] = useState("abc123");
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);

  const login = async () => {
    setIsVisibleLoading(true);
    if (!email || !password) {
      Toast.show({
        text: "todos los campos son obligatorios",
        type: "warning",
        position: "top",
      });
    } else if (!validateEmail(email)) {
      Toast.show({
        text: "el email no es correcto",
        type: "warning",
        position: "top",
      });
    } else {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate("Principal");
        })
        .catch((error) => {
          Toast.show({
            text: "error al entrar:" + error,
            type: "warning",
            position: "top",
          });
        });
    }
    setIsVisibleLoading(false);
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
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={login}>
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={styles.btn}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.text}>Registrate</Text>
        </TouchableHighlight>
      </View>
      <Loading text="Iniciando sesion" isVisible={isVisibleLoading} />
    </View>
  );
}

export default withNavigation(LoginForm);

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

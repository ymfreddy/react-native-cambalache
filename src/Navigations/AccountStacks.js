import { createStackNavigator } from "react-navigation-stack";
import MyAccountScreen from "../Screens/MyAccount";
import LoginScreen from "../Screens/Login";
import RegisterScreen from "../Screens/Register";

const AccountScreenStacks = createStackNavigator({
  MyAccount: {
    screen: MyAccountScreen,
    navigationOptions: () => ({
      title: "Mi cuenta",
    }),
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: "Login",
    }),
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: () => ({
      title: "Registro",
    }),
  },
});

export default AccountScreenStacks;

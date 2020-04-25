import React from "react";
import Principal from "../Screens/Principal";
import MenuOpciones from "../Components/MenuOpciones";
import OptionsStack from "./OptionsStack";
import { createDrawerNavigator } from "react-navigation-drawer";

const HomeStack = createDrawerNavigator(
  {
    Options: { screen: OptionsStack },
    Principal: { screen: Principal },
  },
  {
    initialRouteName: "Principal",
    contentComponent: (props) => <MenuOpciones {...props} />,
  }
);
export default HomeStack;

import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
//import { Icon } from "native-base";
import { Image } from "react-native";
import { IMAGE } from "../Constants/Images";
import Screen1 from "../Screens/Screen1";
import Screen2 from "../Screens/Screen2";
import Screen3 from "../Screens/Screen3";

export default OptionsStack = createBottomTabNavigator(
  {
    Screen1: {
      screen: Screen1,
      navigationOptions: () => ({
        tabBarLabel: "Screen1",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={IMAGE.ICON_MENU}
            resizeMode="contain"
            color={tintColor}
            style={{ width: 20, height: 20 }}
          />
        ),
        //tabBarIcon: ({ tintColor }) => <Icon name="bowtie" color={tintColor} />
      }),
    },
    Screen2: {
      screen: Screen2,
      navigationOptions: () => ({
        tabBarLabel: "Screen2",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={IMAGE.ICON_MENU}
            resizeMode="contain"
            color={tintColor}
            style={{ width: 20, height: 20 }}
          />
        ),
        //tabBarIcon: ({ tintColor }) => <Icon name="bowtie" color={tintColor} />
      }),
    },
    Screen3: {
      screen: Screen3,
      navigationOptions: () => ({
        tabBarLabel: "Screen3",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={IMAGE.ICON_MENU}
            resizeMode="contain"
            color={tintColor}
            style={{ width: 20, height: 20 }}
          />
        ),
        //tabBarIcon: ({ tintColor }) => ( <Icon name="briefcase" color={tintColor} /> )
      }),
    },
  },
  {
    initialRoutName: "Screen1",
    order: ["Screen1", "Screen2", "Screen3"],
    tabBarOption: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680",
    },
  }
);

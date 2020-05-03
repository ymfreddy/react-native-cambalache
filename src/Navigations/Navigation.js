import React from "react";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import SearchScreenStacks from "./SearchStacks";
import AccountScreenStacks from "./AccountStacks";
import FavoritesScreenSatcks from "./FavoritesStacks";

const NavigationStacks = createBottomTabNavigator(
  {
    Cuenta: {
      screen: AccountScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Mi Cuenta",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="home-outline"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    Busqueda: {
      screen: SearchScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Busqueda",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="magnify"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    Favoritos: {
      screen: FavoritesScreenSatcks,
      navigationOptions: () => ({
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="heart-outline"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: "Busqueda",
    order: ["Cuenta", "Busqueda", "Favoritos"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680",
    },
  }
);

export default createAppContainer(NavigationStacks);

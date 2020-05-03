import { createStackNavigator } from "react-navigation-stack";
import FavoritesScreen from "../Screens/Favorites";

const FavoritesScreenStacks = createStackNavigator({
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: () => ({
      title: "Favoritos",
    }),
  },
});

export default FavoritesScreenStacks;

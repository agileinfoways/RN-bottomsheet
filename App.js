import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./js/screen/home.screen";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default createAppContainer(AppNavigator);

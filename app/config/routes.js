import { createStackNavigator, createAppContainer } from "react-navigation";

import LocationList from "../screens/LocationList";

const headerStyleOptions = () => ({
  headerMode: "screen",
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#2695D2"
    },
    headerTitleStyle: "#FFFFFF",
    headerTintColor: "#FFFFFF"
  })
});

const LoggedStack = createStackNavigator(
  {
    LocationListScreen: {
      screen: LocationList,
      navigationOptions: {
        headerTitle: "Lista de Localizações"
      }
    }
  },
  headerStyleOptions()
);

const routeStackNavigator = createStackNavigator(
  {
    LocalizationListRoute: { screen: LoggedStack }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(routeStackNavigator);

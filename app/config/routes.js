import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "../screens/Login";
import LocationList from "../screens/LocationList";
import LocationDetails from "../screens/LocationDetails";

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

// Not authenticated route
const LoginStack = createStackNavigator(
  {
    LoginScreen: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    }
  },
  headerStyleOptions()
);

// Authenticated route
const LoggedStack = createStackNavigator(
  {
    LocationListScreen: {
      screen: LocationList,
      navigationOptions: {
        headerTitle: "Lista de Localizações"
      }
    },
    LocationDetailsScreen: {
      screen: LocationDetails,
      navigationOptions: {
        headerTitle: "Detalhes da Localização"
      }
    }
  },
  headerStyleOptions()
);

const routeStackNavigator = createStackNavigator(
  {
    LoginRoute: { screen: LoginStack },
    LoggedRoute: { screen: LoggedStack }
  },
  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: "LoginRoute"
  }
);

export default createAppContainer(routeStackNavigator);

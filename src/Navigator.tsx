import {
  createAppContainer,
  NavigationScreenComponent,
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomePage from "./screens/Home";
import Modal from "./screens/Modal";
import Map from "./screens/Map";

const makeScene = (screen: NavigationScreenComponent<any, any>) => ({ screen });

const StackNavigator = createStackNavigator(
  {
    Home: makeScene(HomePage),
    Modal: makeScene(Modal),
    Map: makeScene(Map),
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: { headerVisible: false },
  }
);

export default createAppContainer(StackNavigator);

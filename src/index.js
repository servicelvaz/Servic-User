import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import theme from "./core/theme";

import {
  SplashScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  Profile
} from "./screens";

const AppNav = createStackNavigator({
  Home: Dashboard 
},{
  headerMode: "screen"
});

const ProfileNav = createStackNavigator({
  Profile
},{
  headerMode: "float"
});


const BottomTabNav = createMaterialBottomTabNavigator(
  {
    App: {
      screen: AppNav,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Icon name="home" size={25} />;
        }
      }
    },
    Profile: {
      screen: ProfileNav,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Icon name="person" size={25} />;
        }
      }
    }
  },
  {
    initialRouteName: "App",
    activeColor: "blue",
    inactiveColor: "grey",
    barStyle: { backgroundColor: "white" },
    shifting: true
  }
);

const AuthNav = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    BottomTabNav
  },
  {
    initialRouteName: "HomeScreen",
    headerMode: "none"
  }
);

const Main = createSwitchNavigator({
  SplashScreen,
  App: BottomTabNav,
  Auth: AuthNav
});

export default createAppContainer(Main);

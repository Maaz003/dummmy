import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import navigationService from '../../navigationService';
import HomeScreen from '../../containers/appContainers/homeScreen';
import Contact from '../../containers/appContainers/contactScreen/Contactus';
import CustomDrawer from '../../components/layout/customDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Dimensions, View} from 'react-native';
const AppStack = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  const DrawerNavigator = () => {
    return (
      <NavigationContainer ref={navigationService.navigationRef}>
        <Drawer.Navigator
          drawerPosition="right"
          drawerStyle={{
            backgroundColor: 'black',
          }}
          drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen name="HomeTab" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  };

  const HomeStackNavigator = props => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    );
  };

  return <DrawerNavigator />;
};
export default AppStack;

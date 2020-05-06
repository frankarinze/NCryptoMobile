import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { colors, theme } from "../constant";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from 'react-native-screens';
import { MaterialCommunityIcons, Entypo, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector } from "react-redux";

import Home from '../screens/Home'
import Signin from '../screens/Signin'
import Register from '../screens/Register'
import Splashscreen from '../screens/Splashscreen'

const Tab = createMaterialTopTabNavigator();

enableScreens();



// export default createAppContainer(createSwitchNavigator(
//     {

//       Home: Home,
//       OtpScreen : OtpScreen,
//       Signin:Signin,
//       BusinessSignup:BusinessSignup,
//       IndividualSignup: IndividualSignup,
//       PartialSignup: PartialSignup

//     }));

const Stack = createNativeStackNavigator()

const Nav = () => {
  const auth = useSelector(state => state.auth);
  return auth.access_token === null ? (
      <NavigationContainer>
       <Tab.Navigator
    initialRouteName="Signin"
    tabBarOptions={{
      activeTintColor:colors.black,
      labelStyle: { fontSize: 12},
      style: { backgroundColor: 'powderblue',height:300 ,justifyContent:'center',flexDirection:'column'},
   
    }}
  >
    <Tab.Screen
      name="Signin"
      component={Signin}
      options={{ tabBarLabel: 'Sign in' }}
    />
    <Tab.Screen
      name="Register"
      component={Register}
      options={{ tabBarLabel: 'Register' }}
    />
  </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>

     


      {/* Other stacks */}
    
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: colors.white },
            title: "",
            headerBackTitle: "",


            headerRight: () => (
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  marginHorizontal:20,
                  justifyContent:'space-between',
                  paddingRight: 20
                }}
              >
                <Text
                  style={[
                    theme.p,
                    { textAlign: "left", color: colors.black50 }
                  ]}
                >
                  Hi,Toyosi
                      </Text>
                      <Entypo name="bell" color={colors.black} size={24} />


              </View>
            )
          }}
        />

        <Stack.Screen
          name='Splashscreen'
          component={Splashscreen}
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default Nav;
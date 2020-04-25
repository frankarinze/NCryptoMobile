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

const Tab = createMaterialTopTabNavigator();



import Home from '../screens/Home'
import Signin from '../screens/Signin'
import Register from '../screens/Register'
import Splashscreen from '../screens/Splashscreen'



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
  return (
    // <NavigationContainer>
    //   <Stack.Navigator >
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       options={{
    //         headerTintColor: "white",
    //         headerStyle: { backgroundColor: colors.white },
    //         title: "",
    //         headerBackTitle: "",


    //         headerRight: () => (
    //           <View
    //             style={{
    //               flexDirection: "row",
    //               flex: 2,
    //               justifyContent: "center",
    //               paddingRight: 20
    //             }}
    //           >
    //             <Text
    //               style={[
    //                 theme.h4,
    //                 { textAlign: "left", color: colors.black50 }
    //               ]}
    //             >
    //               Home
    //                   </Text>


    //           </View>
    //         )
    //       }}
    //     />

    //     <Stack.Screen
    //       name='Signin'
    //       component={Signin}
    //       options={{
    //         headerShown: false
    //       }}
    //     />

    //   </Stack.Navigator>
    //   <Tab.Navigator
    //   initialRouteName="Feed"
    //   tabBarOptions={{
    //     activeTintColor: '#e91e63',
    //     labelStyle: { fontSize: 12 },
    //     style: { backgroundColor: 'powderblue' },
    //   }}
    // >
    //   <Tab.Screen
    //     name="Feed"
    //     component={Feed}
    //     options={{ tabBarLabel: 'Home' }}
    //   />
    //   <Tab.Screen
    //     name="Notifications"
    //     component={Notifications}
    //     options={{ tabBarLabel: 'Updates' }}
    //   />
    // </Tab.Navigator>
    // </NavigationContainer>

    <NavigationContainer>

      {/* <Tab.Navigator
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
  </Tab.Navigator> */}


      {/* Other stacks */}
      <Stack.Navigator initialRouteName="Splashscreen" >
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
                  flex: 2,
                  justifyContent: "center",
                  paddingRight: 20
                }}
              >
                <Text
                  style={[
                    theme.h4,
                    { textAlign: "left", color: colors.black50 }
                  ]}
                >
                  Home
                      </Text>


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
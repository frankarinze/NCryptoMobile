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



import Home from '../screens/Home'
import Signin from '../screens/Signin'

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signin'>
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
          name='Signin'
          component={Signin}
          options={{
            headerShown: false
          }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Nav;
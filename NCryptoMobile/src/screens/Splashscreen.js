import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";

import { colors, theme } from "../constant";
import { MaterialIcons } from "@expo/vector-icons";
import { capitalize } from "../utils";
import Modal from "react-native-modal";
import { SelectButton, Input, AppButton ,Header} from "../components";
import { Field, reduxForm } from "redux-form";

const layoutBg = require('../assets/images/bg.png');
const Splashscreen = ({ navigation }) => {


{/* <Header
        title={"Goal Summary"}
        leftInstruction={() => navigation.goBack()}
        rightInstruction={() =>
          navigation.navigate("Creategoals", {
            ...navigation.state.params,
            ...this.state
          })
        }
        right={<View></View>}
      /> */}


  return (
    <View style={styles.container}>
        <ImageBackground source={layoutBg} style={styles.image}>
        <View style={{ flex: 1, marginBottom: 50, marginTop: "50%", marginHorizontal: 18 }}>
         <View style={theme.imageContainer}>
          <Image
            source={require('../assets/logo.png')}
            fadeDuration={0}
            style={{ width: 180, height: 70, }}
          />
        </View>
        <Text style={[theme.h2, { marginTop: 20,color:colors.white }]}>Splashscreen</Text>
       
        <View style={{ height: 78 }}>

          <AppButton
            text="Sign In"
            styles={theme}
          />

        </View>
        </View>
        </ImageBackground>
        </View>

   
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50
},
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
},
});
export default Splashscreen;
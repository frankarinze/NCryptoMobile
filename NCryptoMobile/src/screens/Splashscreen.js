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
import { SelectButton, Input, AppButton, Header } from "../components";
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
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/logo.png')}
              fadeDuration={0}
              style={{ width: 180, height: 70, }}
            />
          </View>
          <Text style={[theme.h2, { marginTop: 20, color: colors.white }]}>Welcome to </Text>
          <Text style={[theme.h1, { color: colors.white }]}>NEXTCRYPTO</Text>
          <Text style={[theme.p, { color: colors.white ,marginVertical: 40}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Sem mauris id mauris lacinia mi viverra. Pellentesque 
             dolor vitae pellentesque justo.
             Scelerisque ut facilisis odio amet, purus, nec integer.
              Nisl vivamus purus sed
        </Text>
        <Text style={[theme.h5, { textAlign:'center',  color: colors.white ,marginHorizontal:25,marginBottom:10}]}>
          Login using credentials and enjoy Nextcrypto</Text>



          <View style={{ height: 75 }}>

            <AppButton
              text="Sign In"
              styles={theme}
            />

          </View>
          <Text style={[theme.h5, { textAlign:'center',  color: colors.white ,marginHorizontal:25,marginBottom:10}]}>
          New here? Create account</Text>
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
  imageContainer: {
    marginBottom: 10,
    justifyContent: 'flex-start',
  },
});
export default Splashscreen;
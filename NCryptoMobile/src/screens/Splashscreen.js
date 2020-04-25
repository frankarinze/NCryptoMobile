import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";

import { colors, theme } from "../constant";
import { MaterialIcons } from "@expo/vector-icons";
import { capitalize } from "../utils";
import Modal from "react-native-modal";
import { SelectButton, Input, AppButton ,Header} from "../components";
import { Field, reduxForm } from "redux-form";

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
    <ScrollView
      style={{ backgroundColor: colors.offWhite }}
      contentContainerStyle={styles.container} >
      <View style={[{ flex: 1, }, theme.gContainer]}>
        <Text style={[theme.h2, { marginTop: 20 }]}>Splashscreen</Text>
       
        <View style={{ height: 78 }}>

          <AppButton
            text="Next"
            styles={theme}
          />

        </View>
      </View>
      <View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: colors.white
  },
  SelectItem: {
    flexDirection: "row",
    paddingVertical: 18,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 3,
    borderColor: colors.selectGrey,
    borderWidth: 1,
    // shadow
    shadowOpacity: 0.06,
    elevation: 1,
    shadowOffset: { width: 0, height: 0.5 },
    marginVertical: 5
  }
});
export default Splashscreen;
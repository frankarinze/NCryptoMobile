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

const Home = ({ navigation }) => {
  const items = [
    { title: "Send an Item" },
    { title: "Receive an Item", }
  ];

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

  const [selected, changeSelected] = useState(null);
  // const [isVisible, setVisible] = useState(false);
  return (
    <ScrollView
      style={{ backgroundColor: colors.offWhite }}
      contentContainerStyle={styles.container} >
      <View style={[{ flex: 1, }, theme.gContainer]}>
        {/* <View style={styles.imageContainer}>
          <Image
            source={require('../assets/logo.png')}
            fadeDuration={0}
            style={{ width: 65, height: 70, }}
          />
        </View> */}
        <Text style={[theme.h2, { marginTop: 20 }]}>What would you like to do today ?</Text>
        <View style={{ marginTop: 20 }}>
          {items.map((item, index) => {
            return (
              <SelectItem
                key={item.title}
                {...{ item, index, selected, changeSelected }}
              />
            );
          })}
        </View>
        <View style={{ height: 98 }}>

          <AppButton
            text="Next"
            styles={theme}
          />

          <TouchableOpacity
             onPress={() => navigation.navigate("PickupAddress")}
                           
          >
            <Text style={[theme.h4lighter, { color: colors.brandPrimary, textAlign: 'center' }]}>
              Skip
          </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>

      </View>
    </ScrollView>
  );
};

export const SelectItem = ({ item, selected, changeSelected }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        changeSelected(item.title);
        if (item.instruction) {
          item.instruction();
        }
      }}
      style={styles.SelectItem}
    >
      <MaterialIcons
        style={{ marginRight: 10 }}
        size={24}
        color={colors.brandPrimary}
        name={
          selected == item.title
            ? "radio-button-checked"
            : "radio-button-unchecked"
        }
      />
      <View style={{ flex: 1, marginRight: 5 }}>
        <Text style={[theme.h4, { fontSize: 16 }]}>{capitalize(item.title)}</Text>
        {/* {!!item.title && (
          <Text style={{ color: colors.brandGrey }}>
            {capitalize(item.title)}
          </Text>
        )} */}
      </View>
    </TouchableOpacity>
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
export default Home;
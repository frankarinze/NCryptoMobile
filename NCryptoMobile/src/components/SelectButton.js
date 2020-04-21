import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Switch,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors, theme } from "../constant";

function SelectButton({
  color,
  text,
  caps,
  isLoading,
  fullWidth,
  backgroundColor,
  fontSize,
  radius,
  instructions,
  containerStyle,
  textStyle,
  disabled,
  ...props
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => instructions()}
      style={containerStyle}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={textStyle}>{caps ? text.toLocaleUpperCase() : text}</Text>
      )}
    </TouchableOpacity>
  );
}
SelectButton.defaultProps = {
  text: "",
  caps: true,
  isLoading: false,
  fullWidth: true,
  disabled: false,
  radius: 30,
  instructions: () => {},
  containerStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.brandPrimary,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 30
  },
  textStyle: {
    marginLeft: 5,
    color: colors.white,
    ...theme.h3
  }
};

export default SelectButton;
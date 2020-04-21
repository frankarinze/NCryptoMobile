import React, { Component } from 'react';
import { ScrollView, Text, TextInput, View, Picker, PickerIOS, Platform } from 'react-native';
import { TextField } from 'react-native-material-textfield';
// import Icon from "react-native-vector-icons/Ionicons";
import { theme, colors } from '../constant'



class AppTextInput extends Component {
  render() {
    // const { input, meta, floatingLabel, keyboardType, maxLength, disabled, ...props } = this.props;
    // const { touched, error } = meta
    // const { prefix_icon } = props;
    // const isFocused = meta.active;
    // const styles = props.styles;
    // const icon_size = 0.5 * styles.container.height;
    // const helper_text_size = 0.34 * icon_size;
    // let suffix_icon = !!prefix_icon ? <Icon name={props.suffix_icon} color="#ccc" size={icon_size} /> : null
    // let border_color = !!isFocused ? "#8b00fb" : "#ccc";
    const { stateValue,label, keyboardType, TextInputPlaceholder, ...props } = this.props;
    return (
      <View style={{flex:1}}>
        <Text style={[{marginVertical:12,},theme.p]}>{label}</Text>
        <TextInput
          style={[theme.authInputText]}
          // onChangeText={(email) => this.setState({email})}
          // value={this.state.email}
          value={stateValue}
          placeholderTextColor={colors.inputText}
          placeholder={TextInputPlaceholder}
          returnKeyType={'next'}
          keyboardType={!!keyboardType ? keyboardType : 'default'}
        />

      </View>
    );
  }
}

export default AppTextInput;


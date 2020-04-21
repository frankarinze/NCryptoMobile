import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, Text, View, Picker, PickerIOS, Platform } from 'react-native';
import { colors , theme} from '../constant'
import PropTypes from 'prop-types';


class AppButton extends Component {

  state = { isFocused: false, error: "", help: "", isSecure: false, blankText: this.props.placeholder };
  render() {
    const { text, instruction, styles } = this.props
    const icon_size = 0.5 * styles.container.height;
    return (
      <View style={theme.button}>
        <TouchableOpacity
          onPress={() => {
            if (instruction) instruction()
          }}
          style={{ color: "white", textAlign: "center", fontSize: 0.7 * icon_size, justifyContent: 'center', flex: 1 }}
          color='white'
        >
          {
            // isLoading ? <ActivityIndicator /> :
              <Text
                style={{
                  color: 'white',
                  textAlign: "center",
                  fontSize: 0.61 * icon_size,
                  fontFamily: 'nunito-semibold'
                }}
              >{text ? text : 'Continue'}</Text>

          }
        </TouchableOpacity>
      </View>
    );
  }
}

AppButton.propTypes = {
  text: PropTypes.string,
  isLoading: PropTypes.bool,
  instruction: PropTypes.func,
}
AppButton.defaultProps = {
  instruction: () => { },
};


export default AppButton;

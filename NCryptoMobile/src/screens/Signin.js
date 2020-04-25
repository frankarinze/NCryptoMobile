import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, View, Image, TouchableOpacity } from 'react-native';
import { AppButton, AppTextInput } from '../components'
import { colors, theme } from '../constant'
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

const layoutBg = require('../assets/images/bg.png');
let SigninForm = ({
    isLoading,
    onSubmit,
    handleSubmit,
    title,
    amount,
    frequency,
    start,
    end,
    goalType,
    onStartDateChange,
    startDate,
    settings,
    navigation,
    ...props
}) => {
    return (
        <>
            <View style={{ height: 230 }}>
                <Field
                    name="email"
                    // label="Email Address"
                    TextInputPlaceholder="Enter Email"
                    component={AppTextInput}
                    styles={theme}
                    prefix_icon="md-clipboard"
                    keyboardType
                />

                <Field
                    name="password"
                    // label="Password"
                    TextInputPlaceholder="Enter Password"
                    component={AppTextInput}
                    styles={theme}
                    prefix_icon="md-clipboard"
                    keyboardType
                />
                <Text style={[{ marginRight: 8, color: colors.white,textAlign:'right' }, theme.p]}>Forgot password ?</Text>


            </View>
            <View style={{ height: 75 }}>
                <AppButton
                    text="Sign In"
                    instruction=""
                    isLoading=""
                    styles={theme}
                />
            </View>
        </>
    )
}
SigninForm = reduxForm({
    form: "SigninForm",
})(SigninForm);

class Signin extends Component {

    render() {

        return <>
            <View style={styles.container}>
                <ImageBackground source={layoutBg} style={styles.image}>
                    <View style={{ flex: 1, marginBottom: 50, marginTop: 10, marginHorizontal: 18 }}>

                        <View style={{ flex: 1, justifyContent: 'center' }}>

                            <SigninForm />


                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                                <Text style={[{ marginRight: 8, color: colors.white }, theme.p]}>Don't have an Account ?</Text>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate("PartialSignup")}
                                >
                                    <Text style={[{ color: colors.brandPrimary }, theme.p]}>Register</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        </>
    }
}

// function mapDispatchToProps(dispatch) {
//     return ;
//   }
//   const mapStateToProps = () => {
//     //   console.log(state);
//       return{}
//   }

export default Signin;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        fontSize: 50
    },
    imageContainer: {
        marginVertical: 28,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});
import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, View, Image, TouchableOpacity } from 'react-native';
import { AppButton, AppTextInput } from '../components'
import { colors, theme } from '../constant'
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from 'redux'
import { login } from '../action/index'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const layoutBg = require('../assets/images/bg.png');
// const onSubmit = (values) => console.log(values);
let SigninForm = ({
    isLoading,
    onSubmit,
    handleSubmit,
    // title,
    navigation,
    ...props
}) =>
{
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
                    secureTextEntry={true}
                />
                <Text style={[{ marginRight: 8, color: colors.white,textAlign:'right' }, theme.p]}>Forgot password ?</Text>


            </View>
            <View style={{ height: 75 }}>
                <AppButton

                    text="Sign In"
                    isLoading={isLoading}
                    styles={theme}
                    instruction={() => {  handleSubmit()}}
                    // Instructions ={() => console.log()}
                    
                />
            </View>
        </>
    )
}
SigninForm = reduxForm({
    form: "Signin Form",
    validate: values => {
        const errors = {}
        if (!values.password) {
            errors.password = 'Password is required'
        }
        //  else if (values.password.length < 6) {
        //     errors.password = ''

        //     // errors.password = 'Password is Lower than 6 Digits'
        // }
        if (!values.email) {
            errors.email = 'Email / Phone is required'
        }
        return errors
    },
    asyncBlurFields: ['password, email'],
})(SigninForm);

// LoginForm = reduxForm({
//     form: 'login form',
//     validate: values => {
//         const errors = {}
//         if (!values.password) {
//             errors.password = 'Password is required'
//         }
//         //  else if (values.password.length < 6) {
//         //     errors.password = ''

//         //     // errors.password = 'Password is Lower than 6 Digits'
//         // }
//         if (!values.username) {
//             errors.username = 'Email / Phone is required'
//         }
//         return errors
//     },
//     asyncBlurFields: ['password, username'],
// })(LoginForm);

class Signin extends Component {
    constructor(props) {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    static navigationOptions = {
        header: null,
    }
    state = {
        isLoading: false
    }
    componentWillReceiveProps({ auth }) {
        const { authenticated } = auth;
        if (authenticated) {
            this.props.navigation.navigate('Home', { loggedIn: true });
        }
    }
    _handleSubmit = (values) => {
        // console.log(values)
        if (this.state.isLoading) return;
        this.setState({ isLoading: true });
        this.props.login(
            values
            // {
            // username: '07018782712',
            // password: 'godisgood',
            /**
            * remove this and replace with
            * (values)
            */
            // }
        )
            .catch(({ response, request }) => {
                this.setState({ isLoading: false })
                if (response && response.data && response.data.message && response.data.message == "Too Many Attempts.") {
                    return;
                }
                if (response && response.data) {
                    // console.log(response.data)
                    alert('Invalid Credentials');
                    return;
                }
                if (request) {
                    // alert(request._response);
                }
            })
    }
    render() {

        return <>
         <KeyboardAwareScrollView enableOnAndroid={true} enableAutomaticScroll keyboardOpeningTime={1} extraHeight={Platform.select({ android: 200 })}
                contentContainerStyle={{ justifyContent: 'center' }}
            >
            <View style={styles.container}>
                <ImageBackground source={layoutBg} style={styles.image}>
                    <View style={{ flex: 1, marginBottom: 50, marginTop: 10, marginHorizontal: 18 }}>

                        <View style={{ flex: 1, justifyContent: 'center' }}>

                            <SigninForm 
                            isLoading={this.state.isLoading}
                            onSubmit={this._handleSubmit}
                            navigation={this.props.navigation}
                            />


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
            </KeyboardAwareScrollView>
        </>
    }
}

const mapStateToProps = ({ auth, user }) => {
    return {
        user,
        auth,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { login }, dispatch
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin);

// function mapDispatchToProps(dispatch) {
//     return ;
//   }
//   const mapStateToProps = () => {
//     //   console.log(state);
//       return{}
//   }



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
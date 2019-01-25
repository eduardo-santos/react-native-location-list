import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import { connect } from "react-redux";
import { NavigationActions, StackActions } from "react-navigation";

import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";

import {
  apiPostLogin,
  changeEmail,
  changePassword,
  cleanResult
} from "../actions/apiLogin";
import { cleanResult as cleanRegisterResult } from "../actions/apiRegister";
import { FullScreenIndicatorOverlay } from "../components/ActivityIndicators";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    width: "100%",
    alignItems: "center",
    paddingTop: 36
  },
  textRegister: {
    marginTop: 20,
    fontSize: 16,
    color: "#2c3738",
    textDecorationLine: "underline"
  },
  loginSpace: {
    marginTop: 40
  },
  logo: {
    width: 200
  }
});

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    isApiSubmiting: PropTypes.bool,
    email: PropTypes.string,
    password: PropTypes.string,
    apiResultData: PropTypes.any
  };

  constructor(props) {
    super(props);

    this.state = {
      validateForm: false
    };
  }

  handleEmailInputChange = email => {
    this.props.dispatch(changeEmail(email));
  };

  handlePasswordInputChange = password => {
    this.props.dispatch(changePassword(password));
  };

  loginCallback = () => {
    if (this.props.apiResultData) {
      if (this.props.apiResultData.error) {
        const errorMessage = this.props.apiResultData.error;
        this.props.dispatch(cleanResult());

        Alert.alert("Login inválido", errorMessage);
      } else {
        this.props.dispatch(cleanResult());

        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            key: null,
            actions: [
              NavigationActions.navigate({
                routeName: "LoggedRoute"
              })
            ]
          })
        );
      }
    }
  };

  handleLogin = () => {
    this.setState(
      {
        validateForm: true
      },
      () =>
        this.setState(
          {
            validateForm: false
          },
          () => {
            if (
              !this.emailRef.state.errorMessage &&
              !this.passwordRef.state.errorMessage
            ) {
              const request = {
                email: this.props.email,
                password: this.props.password
              };
              this.props.dispatch(apiPostLogin(request));
            }
          }
        )
    );
  };

  handleRegister = () => {
    this.props.dispatch(cleanRegisterResult());
    this.props.navigation.navigate("RegisterScreen");
  };

  render() {
    this.loginCallback();

    return (
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={require("../resources/images/company-logo.png")}
          style={styles.logo}
        />
        <TextInput
          ref={r => {
            this.emailRef = r;
          }}
          handleOnChangeText={this.handleEmailInputChange}
          placeholder="E-mail"
          floatingLabel="E-mail"
          type="email"
          keyboardType="email-address"
          required
          checkSubmitValidation={this.state.validateForm}
          defaultValue={this.props.email}
          iconRight={{ name: "email", color: "#2695D2" }}
          editable={!this.props.isApiSubmiting}
        />
        <TextInput
          ref={r => {
            this.passwordRef = r;
          }}
          handleOnChangeText={this.handlePasswordInputChange}
          placeholder="Senha"
          floatingLabel="Senha"
          secureTextEntry
          required
          min={6}
          max={10}
          checkSubmitValidation={this.state.validateForm}
          defaultValue={this.props.password}
          iconRight={{ name: "lock", color: "#2695D2" }}
          editable={!this.props.isApiSubmiting}
        />
        <View style={styles.loginSpace} />
        <Button
          text="ENTRAR"
          onPress={this.handleLogin}
          disabled={this.props.isApiSubmiting}
          width="100%"
        />
        <Text onPress={this.handleRegister} style={styles.textRegister}>
          Cadastrar novo usuário
        </Text>
        {this.props.isApiSubmiting ? (
          <FullScreenIndicatorOverlay text="Entrando...." />
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state.apiLogin
});

export default connect(mapStateToProps)(Login);

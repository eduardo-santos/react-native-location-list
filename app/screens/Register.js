import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import { connect } from "react-redux";
import { NavigationActions, StackActions } from "react-navigation";

import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";

import {
  apiPostRegister,
  changeName,
  changeEmail,
  changePassword,
  cleanResult
} from "../actions/apiRegister";
import { FullScreenIndicatorOverlay } from "../components/ActivityIndicators";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    width: "100%",
    alignItems: "center",
    paddingTop: 10
  },
  textForgotPassword: {
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

class Register extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    isApiSubmiting: PropTypes.bool,
    name: PropTypes.string,
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

  handleNameInputChange = name => {
    this.props.dispatch(changeName(name));
  };

  handleEmailInputChange = email => {
    this.props.dispatch(changeEmail(email));
  };

  handlePasswordInputChange = password => {
    this.props.dispatch(changePassword(password));
  };

  registerCallback = () => {
    if (this.props.apiResultData) {
      if (this.props.apiResultData.error) {
        const errorMessage = this.props.apiResultData.error;
        this.props.dispatch(cleanResult());

        Alert.alert("Cadastro inválido", errorMessage);
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

  handleRegister = () => {
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
              !this.nameRef.state.errorMessage &&
              !this.emailRef.state.errorMessage &&
              !this.passwordRef.state.errorMessage &&
              !this.passwordConfirmRef.state.errorMessage
            ) {
              const request = {
                name: this.props.name,
                email: this.props.email,
                password: this.props.password
              };
              this.props.dispatch(apiPostRegister(request));
            }
          }
        )
    );
  };

  render() {
    this.registerCallback();

    return (
      <View style={styles.container}>
        <TextInput
          ref={r => {
            this.nameRef = r;
          }}
          handleOnChangeText={this.handleNameInputChange}
          placeholder="Nome"
          floatingLabel="Seu Nome"
          type="only-alphabet"
          required
          checkSubmitValidation={this.state.validateForm}
          defaultValue={this.props.name}
          editable={!this.props.isApiSubmiting}
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
          editable={!this.props.isApiSubmiting}
        />
        <TextInput
          ref={r => {
            this.passwordConfirmRef = r;
          }}
          placeholder="Confirmar Senha"
          floatingLabel="Confirmar Senha"
          compareTo={{
            value: this.props.password,
            errorMessage: "Confirmação de senha não confere."
          }}
          secureTextEntry
          required
          checkSubmitValidation={this.state.validateForm}
          min={6}
          max={10}
        />
        <View style={styles.loginSpace} />
        <Button
          text="CADASTRAR"
          onPress={this.handleRegister}
          disabled={this.props.isApiSubmiting}
          width="100%"
        />
        {this.props.isApiSubmiting ? (
          <FullScreenIndicatorOverlay text="Cadastrando...." />
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state.apiRegister
});

export default connect(mapStateToProps)(Register);

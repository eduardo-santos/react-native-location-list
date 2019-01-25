import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";
import PropTypes from "prop-types";
import { TextInputMask } from "react-native-masked-text";

import Icon from "react-native-vector-icons/MaterialIcons";

import { emailRegex, onlyAlphabetRegex } from "../../helpers/regex";

import styles from "./styles";

const textInputMaskTypes = [
  "credit-card",
  "cpf",
  "cnpj",
  "zip-code",
  "only-numbers",
  "money",
  "cel-phone",
  "datetime",
  "custom"
];

class DefaultTextInput extends Component {
  static propTypes = {
    handleOnChangeText: PropTypes.func,
    editable: PropTypes.bool,
    floatingLabel: PropTypes.string,
    alwaysShowFloatingLabel: PropTypes.bool,
    type: PropTypes.string,
    options: PropTypes.object,
    required: PropTypes.bool,
    max: PropTypes.number,
    min: PropTypes.number,
    validateOnChange: PropTypes.bool,
    checkSubmitValidation: PropTypes.bool,
    defaultValue: PropTypes.string,
    compareTo: PropTypes.object,
    iconLeft: PropTypes.object,
    iconRight: PropTypes.object,
    textColor: PropTypes.string,
    textBackgroundColor: PropTypes.any,
    textSize: PropTypes.number,
    customError: PropTypes.string,
    customMarginTop: PropTypes.number
  };

  static defaultProps = {
    validateOnChange: true,
    customMarginTop: 20
  };

  constructor(props) {
    super(props);

    this.state = {
      inputValue: props.defaultValue,
      floatingLabel: null,
      errorMessage: null,
      iconColor: "#BDC4CF",
      underlineColor: "#7f7e81"
    };
  }

  componentDidMount() {
    if (this.props.alwaysShowFloatingLabel) {
      this.updateFloatingLabel(null);
    }
  }

  getFloatingLabel = event => {
    const floatingLabelStyles = [styles.floatingLabel];
    let showFloatingLabel = !!this.props.floatingLabel;

    if (showFloatingLabel) {
      if (event === "onFocus") {
        floatingLabelStyles.push({
          color: "#8fc0e8"
        });

        this.setState({
          iconColor: "#8fc0e8",
          underlineColor: "#8fc0e8"
        });
      } else if (event === "onBlur" || this.props.alwaysShowFloatingLabel) {
        floatingLabelStyles.push({
          color: "#BDC4CF"
        });

        this.setState({
          iconColor: "#BDC4CF",
          underlineColor: "#BDC4CF"
        });

        if (
          !this.props.alwaysShowFloatingLabel &&
          (this.state.inputValue == null || this.state.inputValue.length <= 0)
        ) {
          showFloatingLabel = false;
        }
      }
    }

    return showFloatingLabel ? (
      <Text style={floatingLabelStyles}>{this.props.floatingLabel}</Text>
    ) : null;
  };

  updateFloatingLabel = event => {
    this.setState({
      floatingLabel: this.getFloatingLabel(event)
    });
  };

  handleOnFocus = () => {
    this.updateFloatingLabel("onFocus");
  };

  handleOnEndEditing = () => {
    this.updateFloatingLabel("onBlur");
  };

  validateInput = () => {
    let error = null;

    if (this.state.inputValue) {
      if (this.props.type) {
        switch (this.props.type) {
          case "cpf":
            error = !this.ref.isValid() ? "CPF inválido." : null;
            break;
          case "email":
            error =
              emailRegex.test(this.state.inputValue) === false
                ? "E-mail inválido."
                : null;
            break;
          default:
            error = null;
        }
      }

      if (this.props.compareTo) {
        const compareToError = this.props.compareTo.errorMessage
          ? this.props.compareTo.errorMessage
          : "Comparação inválida.";
        error =
          this.state.inputValue !== this.props.compareTo.value
            ? compareToError
            : error;
      }

      if (this.props.max) {
        error =
          this.state.inputValue.length > this.props.max
            ? `O máximo de caracteres é ${this.props.max}.`
            : error;
      }

      if (this.props.min) {
        error =
          this.state.inputValue.length < this.props.min
            ? `O mínimo de caracteres é ${this.props.min}.`
            : error;
      }
    }

    if (this.props.customError) {
      error = this.props.customError;
    }

    if (this.props.required) {
      error =
        this.state.inputValue == null ||
        this.state.inputValue.trim().length <= 0
          ? "Campo obrigatório."
          : error;
    }

    if (this.state.errorMessage !== error) {
      this.setState({
        errorMessage: error
      });
    }
  };

  handleOnChangeText = text => {
    const value =
      this.props.type === "only-alphabet"
        ? text.replace(onlyAlphabetRegex, "")
        : text;

    this.setState(
      {
        inputValue: value
      },
      () => {
        if (this.props.validateOnChange === true) {
          this.validateInput();
        }
        if (this.props.handleOnChangeText) {
          this.props.handleOnChangeText(value, this.state.errorMessage == null);
        }
      }
    );
  };

  renderIcon = direction => {
    if (direction === "left") {
      return (
        <Icon
          name={this.props.iconLeft.name}
          size={this.props.iconLeft.size ? this.props.iconLeft.size : 22}
          color={this.props.iconLeft.color ? this.props.iconLeft.color : null}
          style={{
            paddingRight: this.props.iconLeft.paddingRight
              ? this.props.iconLeft.paddingRight
              : 8
          }}
        />
      );
    }
    if (direction === "right") {
      return (
        <Icon
          name={this.props.iconRight.name}
          size={this.props.iconRight.size ? this.props.iconRight.size : 22}
          color={this.state.iconColor}
          style={{
            paddingLeft: this.props.iconRight.paddingLeft
              ? this.props.iconRight.paddingLeft
              : 8
          }}
        />
      );
    }

    return null;
  };

  render() {
    const containerStyles = [styles.container];
    const stylesInput = [styles.input];

    if (this.props.textColor) {
      stylesInput.push({ color: this.props.textColor });
    }

    if (this.props.textBackgroundColor) {
      stylesInput.push({ backgroundColor: this.props.textBackgroundColor });
    }

    if (this.props.textSize) {
      stylesInput.push({ fontSize: this.props.textSize });
    }

    if (this.props.customMarginTop) {
      containerStyles.push({ marginTop: this.props.customMarginTop });
    }

    if (this.state.errorMessage) {
      containerStyles.push({ marginBottom: 26 });
    }

    if (
      this.props.customError &&
      this.state.errorMessage !== this.props.customError
    ) {
      this.validateInput();
    }

    let textInput = (
      <TextInput
        style={stylesInput}
        underlineColorAndroid={this.state.underlineColor}
        onFocus={this.handleOnFocus}
        onEndEditing={this.handleOnEndEditing}
        value={this.state.inputValue}
        onChangeText={text => this.handleOnChangeText(text)}
        checkSubmitValidation={
          this.props.checkSubmitValidation ? this.validateInput() : null
        }
        {...this.props}
      />
    );

    if (this.props.type && textInputMaskTypes.indexOf(this.props.type) > 0) {
      textInput = (
        <TextInputMask
          ref={r => {
            this.ref = r;
          }}
          style={stylesInput}
          underlineColorAndroid={this.state.underlineColor}
          onFocus={this.handleOnFocus}
          onEndEditing={this.handleOnEndEditing}
          value={this.state.inputValue}
          onChangeText={text => this.handleOnChangeText(text)}
          checkSubmitValidation={
            this.props.checkSubmitValidation ? this.validateInput() : null
          }
          {...this.props}
        />
      );
    }

    return (
      <View style={containerStyles}>
        {this.state.floatingLabel}
        <View style={styles.inputContainer}>
          {this.props.iconLeft ? this.renderIcon("left") : null}
          {textInput}
          {this.props.iconRight ? this.renderIcon("right") : null}
        </View>
        {this.state.errorMessage ? (
          <Text style={styles.errorLabel}>{this.state.errorMessage}</Text>
        ) : null}
      </View>
    );
  }
}

export default DefaultTextInput;

import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, View, Text } from "react-native";

import styles from "./styles";

const Button = ({
  text,
  onPress,
  width,
  height,
  paddingVertical,
  paddingHorizontal,
  marginTop,
  disabled
}) => {
  const buttonStyles = [styles.container];
  const textStyles = [styles.text];

  if (width) {
    buttonStyles.push({ width });
    buttonStyles.push({ paddingHorizontal: 0 });
  } else if (paddingHorizontal) {
    buttonStyles.push({ paddingHorizontal });
  }

  if (height) {
    buttonStyles.push({ height });
    buttonStyles.push({ paddingVertical: 0 });
  } else if (paddingVertical) {
    buttonStyles.push({ paddingVertical });
  }

  if (marginTop) {
    buttonStyles.push({ marginTop });
  }

  return (
    <TouchableHighlight
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
      underlayColor="#2695D2"
    >
      <View style={styles.button}>
        <Text style={textStyles}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  width: PropTypes.any,
  height: PropTypes.any,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  marginTop: PropTypes.number,
  disabled: PropTypes.bool
};

export default Button;

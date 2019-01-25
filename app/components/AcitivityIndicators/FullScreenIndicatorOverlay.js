import React from "react";
import PropTypes from "prop-types";
import { View, Text, ActivityIndicator } from "react-native";

import styles from "./styles";

const FullScreenIndicatorOverlay = ({ text }) => (
  <View style={styles.fullScreenOverlayContainer}>
    <ActivityIndicator size="large" color="#8fc0e8" />
    <Text style={styles.fullScreenOverlayText}>{text}</Text>
  </View>
);

FullScreenIndicatorOverlay.propTypes = {
  text: PropTypes.string
};

export default FullScreenIndicatorOverlay;

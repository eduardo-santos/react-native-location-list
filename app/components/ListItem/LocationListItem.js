import React from "react";
import { TouchableWithoutFeedback, View, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const LocationListItem = ({ onPress, name, address }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.row}>
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.address} numberOfLines={2}>
          {address}
        </Text>
      </View>
      <View style={styles.infoContainerIndicator}>
        <Text style={styles.indicator}> + detalhes</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

LocationListItem.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
  address: PropTypes.string
};

export default LocationListItem;

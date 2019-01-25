import React, { PureComponent } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import {
  apiGetLocationDetails,
  cleanResult
} from "../actions/apiLocationDetails";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  subItems: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#3C4146",
    marginTop: 18,
    textAlign: "center"
  },
  address: {
    fontWeight: "normal",
    fontSize: 18,
    color: "#637381",
    marginTop: 2,
    textAlign: "center"
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    alignSelf: "stretch",
    backgroundColor: "#3C4146",
    marginVertical: 20
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#637381"
  },
  value: {
    fontWeight: "normal",
    fontSize: 18,
    color: "#637381",
    textAlign: "center"
  },
  emptyList: {
    textAlign: "center",
    marginHorizontal: 18,
    marginVertical: 18,
    fontSize: 16
  }
});

class LocationDetails extends PureComponent {
  componentWillMount() {
    this.getDetails();
  }

  componentWillUnmount() {
    this.props.dispatch(cleanResult());
  }

  getDetails = () => {
    if (
      this.props.navigation.state.params &&
      this.props.navigation.state.params.idLocation
    ) {
      this.props.dispatch(
        apiGetLocationDetails(this.props.navigation.state.params.idLocation)
      );
    }
  };

  renderDetails = () => {
    if (this.props.apiResultData && !this.props.apiResultData.error) {
      return (
        <View>
          <Text style={styles.name}>{this.props.apiResultData.name}</Text>
          <Text style={styles.address}>{this.props.apiResultData.address}</Text>
          <View style={styles.separator} />
          <View style={styles.subItems}>
            <Text style={styles.label}>Telefone: </Text>
            <Text style={styles.value}>{this.props.apiResultData.phone}</Text>
          </View>
          <View style={styles.subItems}>
            <Text style={styles.label}>Tipo: </Text>
            <Text style={styles.value}>{this.props.apiResultData.type}</Text>
          </View>
          <View style={styles.subItems}>
            <Text style={styles.label}>Lat: </Text>
            <Text style={styles.value}>{this.props.apiResultData.lat} | </Text>
            <Text style={styles.label}>Lng: </Text>
            <Text style={styles.value}>{this.props.apiResultData.lng}</Text>
          </View>
          <View style={styles.subItems}>
            <Text style={styles.label}>Descrição: </Text>
            <Text style={styles.value}>
              {this.props.apiResultData.description}
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={styles.emptyList}>
            Ocorreu um erro ao obter o detalhe da localização.
          </Text>
          <Button
            title="TENTAR NOVAMENTE"
            accessibilityLabel="Tente carregar novamente os detalhes da localização"
            onPress={() => this.getDetails()}
          />
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.isApiSubmiting ? (
          <Text style={styles.emptyList}>Carregando detalhes... </Text>
        ) : (
          this.renderDetails()
        )}
      </View>
    );
  }
}

LocationDetails.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  apiResultData: PropTypes.any,
  isApiSubmiting: PropTypes.bool
};

const mapStateToProps = state => ({
  ...state.apiLocationDetails
});

export default connect(mapStateToProps)(LocationDetails);

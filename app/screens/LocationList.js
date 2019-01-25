import React, { PureComponent } from "react";
import {
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  RefreshControl,
  Text,
  View,
  Alert
} from "react-native";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { LocationListItem, Separator } from "../components/ListItem";

import { apiGetLocationList } from "../actions/apiLocationList";

import {
  apiPostLocationAdd,
  cleanResult as cleanLocationAddResult
} from "../actions/apiLocationAdd";

const styles = StyleSheet.create({
  flatList: {
    width: "100%"
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  emptyList: {
    textAlign: "center",
    marginTop: 50,
    marginHorizontal: 18,
    fontSize: 16
  }
});

class LocationList extends PureComponent {
  componentWillMount() {
    this.getLocationList();
  }

  addRandomLocation = () => {
    const randomValue = Math.floor(Math.random() * 9999);

    const location = {
      name: `Localização ${randomValue}`,
      address: `Endereço da Localização ${randomValue}`,
      phone: "(11) 12346-5432",
      type: `Tipo da Localização ${randomValue}`,
      lat: "10.2345",
      lng: "-10.2345",
      description: `Descrição da Localização ${randomValue}`
    };

    this.props.dispatch(apiPostLocationAdd(location));
  };

  getLocationList = () => {
    this.props.dispatch(apiGetLocationList());
  };

  onPressLocationItem = idLocation => {
    this.props.navigation.navigate("LocationDetailsScreen", { idLocation });
  };

  renderEmptyList = () => {
    if (this.props.isApiSubmiting) {
      return <Text style={styles.emptyList}>Carregando...</Text>;
    } else {
      return this.props.apiResultData && this.props.apiResultData.error ? (
        <Text style={styles.emptyList}>
          Ocorreu um erro ao obter a lista de localizações. Faça um swipe para
          baixo e tente novamente.
        </Text>
      ) : (
        <Text style={styles.emptyList}>
          Nenhuma localização foi encontrada. Você pode gerar uma nova
          localização no botão acima.
        </Text>
      );
    }
  };

  checkApiLocationAddCallback = () => {
    if (
      !this.isApiLocationAddSubmiting &&
      this.props.apiLocationAddResultData
    ) {
      this.props.dispatch(cleanLocationAddResult());
      if (this.props.apiLocationAddResultData.error) {
        Alert.alert(
          "Erro",
          "Ocorreu um erro na criação da localização. Tente novamente."
        );
      } else {
        this.getLocationList();
      }
    }
  };

  render() {
    this.checkApiLocationAddCallback();

    return (
      <View>
        <FlatList
          style={styles.flatList}
          data={
            this.props.apiResultData && !this.props.apiResultData.error
              ? this.props.apiResultData
              : null
          }
          renderItem={({ item }) => (
            <LocationListItem
              onPress={() => this.onPressLocationItem(item.id)}
              name={item.name}
              address={item.address}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Separator}
          ListHeaderComponent={
            <Button
              color="#2BB5FE"
              title="+ GERAR LOCALIZAÇÃO RANDÔMICA"
              accessibilityLabel="Tente carregar novamente os detalhes da localização"
              onPress={() => this.addRandomLocation()}
            />
          }
          ListEmptyComponent={
            <TouchableWithoutFeedback onPress={this.getLocationList}>
              {this.renderEmptyList()}
            </TouchableWithoutFeedback>
          }
          refreshControl={
            <RefreshControl
              refreshing={
                this.props.isApiSubmiting ||
                this.props.isApiLocationAddSubmiting
              }
              onRefresh={() => this.getLocationList()}
              tintColor="#53B5E1"
              colors={["#53B5E1"]}
            />
          }
        />
      </View>
    );
  }
}

LocationList.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  apiResultData: PropTypes.any,
  isApiSubmiting: PropTypes.bool,
  apiLocationAddResultData: PropTypes.any,
  isApiLocationAddSubmiting: PropTypes.bool
};

const mapStateToProps = state => ({
  ...state.apiLocationList,
  apiLocationAddResultData: state.apiLocationAdd.apiResultData,
  isApiLocationAddSubmiting: state.apiLocationAdd.isApiSubmiting
});

export default connect(mapStateToProps)(LocationList);

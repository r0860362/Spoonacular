import { Component } from 'react';
import { View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-elements';
import Api from '../../constants/Api';

export default class IngredientCardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={{ flex: 1 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Avatar
            source={{ uri: Api.imageSource + this.props.ingredient.getImage() }}
            size={50}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              alignItems: 'flex-end',
            }}
          >
            <Text style={{ flex: 1 }}>{this.props.ingredient.getName()}</Text>
            <Text style={{ flex: 1 }}>
              {this.props.ingredient.getAmount() +
                ' ' +
                this.props.ingredient.getUnit()}
            </Text>
          </View>
        </View>
      </Card>
    );
  }
}

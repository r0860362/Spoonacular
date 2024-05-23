import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Card, ListItem, Tile } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class InstructionCardComponent extends Component {
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              alignItems: 'flex-start',
            }}
          >
            <Card.Title style={{ flex: 1 }}>
              {this.props.step.getNumber()}
            </Card.Title>
            <Text style={{ flex: 1 }}>{this.props.step.getStep()}</Text>
          </View>
        </View>
      </Card>
    );
  }
}

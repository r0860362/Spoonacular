import { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

export default class RecipeInfo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('RecipeInfo mounted');
  }

  render() {
    return <Text>RecipeInfo</Text>;
  }
}

import { Component } from 'react';
import { Text } from 'react-native-elements';
import InstructionCardListComponent from '../components/instruction/InstructionCardListComponent';

export default class RecipeInstructions extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('RecipeInstructions mounted');
  }
  render() {
    return <InstructionCardListComponent />;
  }
}

import { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import InstructionCardComponent from './InstructionCardComponent';
import persistentData from '../../persistent/Data';

export default class InstructionCardListComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(persistentData.selectedRecipe.getInstructionList());
  }

  render() {
    return persistentData.selectedRecipe.getInstructionList() === null ? (
      <View></View>
    ) : (
      <ScrollView contentContainerStyle={styles.instructionCardList}>
        {persistentData.selectedRecipe
          .getInstructionList()
          .getInstructions()
          .map((instruction) =>
            instruction
              .getStepList()
              .getSteps()
              .map((step) => (
                <InstructionCardComponent step={step} key={step.getNumber()} />
              ))
          )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  instructionCardList: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
  },
});

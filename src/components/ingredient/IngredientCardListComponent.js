import { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import IngredientCardComponent from './IngredientCardComponent';
import RecipeInformationService from '../../services/recipe/RecipeInformationService';
import persistentData from '../../persistent/Data';

export default class IngredientCardListComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return persistentData.selectedRecipe.getIngredientList() === null ? (
      <View></View>
    ) : (
      <ScrollView contentContainerStyle={styles.ingredientCardList}>
        {persistentData.selectedRecipe
          .getIngredientList()
          .getIngredients()
          .map((ingredient) => (
            <IngredientCardComponent
              ingredient={ingredient}
              key={ingredient.getId()}
            />
          ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  ingredientCardList: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
  },
});

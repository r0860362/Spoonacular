import { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import RecipeCardComponent from './RecipeCardComponent';
import RecipeService from '../../services/recipe/RecipeService';

export default class RecipeCardListComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return this.props.recipeList === null ? (
      <View></View>
    ) : (
      <View
        style={{
          marginBottom: 100,
          paddingBottom: 20,
        }}
      >
        <ScrollView contentContainerStyle={styles.recipeCardList}>
          {this.props.recipeList.getRecipes().map((recipe) => (
            <RecipeCardComponent
              recipe={recipe}
              key={recipe.getId()}
              navigation={this.props.navigation}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recipeCardList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  title: {
    fontWeight: 'bold',
  },
});

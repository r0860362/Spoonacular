import { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Card, ListItem, Tile } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IngredientList from '../../model/IngredientList';
import InstructionList from '../../model/InstructionList';
import persistentData from '../../persistent/Data';
import RecipeInformationService from '../../services/recipe/RecipeInformationService';

export default class RecipeCardComponent extends Component {
  constructor(props) {
    super(props);
  }

  cardPressed() {
    console.log(this.props.recipe);
    persistentData.selectedRecipe = this.props.recipe;
    this.service = new RecipeInformationService();
    this.service.setId(persistentData.selectedRecipe.getId());
    this.service.get(this, ({ extendedIngredients, analyzedInstructions }) => {
      persistentData.selectedRecipe.setIngredientList(
        new IngredientList(extendedIngredients)
      );
      persistentData.selectedRecipe.setInstructionList(
        new InstructionList(analyzedInstructions)
      );
      this.props.navigation.navigate('RecipeDetail');
    });
  }

  getLikedIcon() {
    return persistentData.isFavoriteRecipe(this.props.recipe)
      ? 'heart-sharp'
      : 'heart-outline';
  }
  toggleLiked() {
    persistentData.toggleFavoriteRecipe(this.props.recipe);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.cardPressed()}>
        <Card hoverable style={{ flex: 1 }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Avatar source={{ uri: this.props.recipe.getImage() }} size={50} />
            <View
              style={{
                marginLeft: 5,
                display: 'flex',
                flexDirection: 'column',
                flex: 4,
                alignItems: 'flex-start',
              }}
            >
              <Text style={{ flex: 1 }}>{this.props.recipe.getTitle()}</Text>
            </View>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
                flex: 1,
              }}
              onPress={() => this.toggleLiked()}
            >
              <Ionicons name={this.getLikedIcon()} size={25} />
            </TouchableOpacity>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

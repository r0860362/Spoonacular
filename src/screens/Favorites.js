import RecipeCardListComponent from '../components/recipe/RecipeCardListComponent';
import persistentData from '../persistent/Data';
import RecipeList from '../model/RecipeList';
import { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    persistentData.subscribe(this);
  }

  persistentDataChanged() {
    this.setState({});
  }

  componentDidMount() {}

  render() {
    return (
      <View>
        <Button
          icon={
            <Ionicons name="heart-dislike-sharp" color="#ffffff" size={20} />
          }
          type="solid"
          title="Clear"
          onPress={() => persistentData.clearFavoriteRecipes()}
        />
        <RecipeCardListComponent
          recipeList={
            new RecipeList(Object.values(persistentData.getFavoriteRecipes()))
          }
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

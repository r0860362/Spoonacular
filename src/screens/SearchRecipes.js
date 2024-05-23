import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Input } from 'react-native-elements';
import MultiSelectComboBoxComponent from '../components/common/MultiSelectComboBoxComponent';
import RecipeCardListComponent from '../components/recipe/RecipeCardListComponent';
import ingredients from '../data/Ingredients';
import RecipeList from '../model/RecipeList';
import RecipeService from '../services/recipe/RecipeService';
import Ionicons from 'react-native-vector-icons/Ionicons';
import persistentData from '../persistent/Data';

export default class SearchRecipes extends Component {
  constructor(props) {
    super(props);
    this.service = new RecipeService();
    this.state = { recipeList: null, recipeInputValue: '' };
    this.confirm = this.confirm.bind(this);
    this.recipeInput = React.createRef();
    persistentData.subscribe(this);
  }

  componentDidMount() {}

  persistentDataChanged() {
    this.setState({});
  }

  clearText() {
    this.recipeInput.current.clear();
    this.recipeInput.current.blur();
  }

  render() {
    return (
      <View>
        <Card style={{ dispay: 'flex', flexDirection: 'column' }}>
          {this.renderInput()}
          <MultiSelectComboBoxComponent
            keySelector="id"
            valueSelector="name"
            maxSuggestionsShown={20}
            data={ingredients}
            confirm={this.confirm}
          />
        </Card>
        <RecipeCardListComponent
          recipeList={this.state.recipeList}
          navigation={this.props.navigation}
        />
      </View>
    );
  }

  renderInput() {
    return (
      <Input
        value={this.state.recipeInputValue}
        ref={this.recipeInput}
        style={{ flex: 1 }}
        placeholder="recipe"
        leftIcon={<Ionicons name="search-outline" size={20} />}
        onChangeText={(value) => this.setState({ recipeInputValue: value })}
        rightIcon={
          <Ionicons
            name="close-circle"
            size={20}
            onPress={() => this.clearText()}
          />
        }
      />
    );
  }

  confirm(selection) {
    Object.keys(selection).forEach((key) =>
      this.service.addIncludeIngredient(selection[key])
    );
    this.service.setQuery(this.state.recipeInputValue);
    this.service.setIsFillIngredients = false;
    this.service.setMaxResults(10);

    this.service.get(this, ({ results }) => {
      this.setState({ recipeList: new RecipeList(results) });
    });
  }
}

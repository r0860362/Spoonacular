import { Component } from 'react';
import { View } from 'react-native';
import RecipeInformationService from '../services/recipe/RecipeInformationService';
import RecipeInstructionService from '../services/recipe/RecipeInstructionService';
import IngredientList from '../model/IngredientList';
import IngredientCardListComponent from '../components/ingredient/IngredientCardListComponent';
import persistentData from '../persistent/Data';
import InstructionList from '../model/InstructionList';

export default class RecipeIngredients extends Component {
  constructor(props) {
    super(props);
    this.service = null;
    this.state = { selectedRecipe: persistentData.selectedRecipe };
  }

  componentDidMount() {
    // this.service = new RecipeInstructionService();
    // this.service.setId(this.props.route.params.id);
    // this.service.get(this, (data) => {
    //});
  }

  render() {
    return <IngredientCardListComponent />;
  }
}

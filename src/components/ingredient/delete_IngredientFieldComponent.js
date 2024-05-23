import { Component } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import AutocompleteService from '../../services/ingredients/AutocompleteService';
import ingredients from '../../data/Ingredients';
import { ListItem } from 'react-native-elements';

export default class IngredientFieldComponent extends Component {
  constructor(props) {
    super(props);
    this.autocompleteService = new AutocompleteService();
    this.autocompleteService.setMaxResults(20);
    this.state = { options: [] };
  }

  updateOptions(text) {
    let result = [];
    for (let i = 0, count = 0; i < ingredients.length && count < 10; i++) {
      if (ingredients[i].name.includes(text.toLowerCase())) {
        result.push(ingredients[i]);
        count++;
      }
    }
    this.setState({ options: result });
  }

  componentDidMount() {}

  handleChange(query) {
    this.updateOptions(query);
  }

  render() {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '60%',
          maxHeight: 200,
          borderColor: 'black',
          borderWidth: 1,
        }}
      >
        <TextInput
          type="text"
          onChangeText={(query) => this.handleChange(query)}
          style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}
        />
        <ScrollView>
          {this.state.options.map((i) => (
            <ListItem
              key={i.id}
              bottomDivider
              // onPress={() => this.onLearnMore(user)}
            >
              <ListItem.Content>
                <ListItem.Title>{i.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))}
        </ScrollView>
      </View>
    );
  }
}

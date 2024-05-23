import { Component } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { Button, ListItem, Chip, Input, Card } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

/*
required props:
    data: array of items to select from
    key: key selector
    value: value selector
    confirm: confirm callback method
*/
export default class MultiSelectComboBoxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { suggestions: {}, selection: {} };
  }

  componentDidMount() {}

  updateSuggestions(query) {
    let suggestions = {};
    if (query !== '') {
      for (
        let i = 0, count = 0;
        i < this.props.data.length && count < this.props.maxSuggestionsShown;
        i++
      ) {
        let candidate = this.props.data[i];
        if (
          this.props.data[i][this.props.valueSelector].includes(
            query.toLowerCase()
          ) &&
          !this.state.selection.hasOwnProperty(
            candidate[this.props.keySelector]
          )
        ) {
          suggestions[candidate[this.props.keySelector]] =
            candidate[this.props.valueSelector];
          count++;
        }
      }
    }
    this.setState({ suggestions: suggestions });
  }
  removeSelectedItem(key) {
    let selection = this.state.selection;
    delete selection[key];
    this.setState({ selection: selection });
  }

  addSelectedItem(key) {
    let selection = this.state.selection;
    let suggestions = this.state.suggestions;
    selection[key] = suggestions[key];
    delete suggestions[key];
    this.setState({ suggestions: suggestions, selection: selection });
  }
  clearText() {
    this.ingredientInput.clear();
    this.updateSuggestions('');
    this.ingredientInput.blur();
  }
  render() {
    return (
      <View style={{ dispay: 'flex', flexDirection: 'column' }}>
        {this.renderSelection()}

        {this.renderInput()}

        {this.renderSuggestions()}

        {this.renderButton()}
      </View>
    );
  }

  renderSelection() {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {Object.keys(this.state.selection).map((key) => {
          return (
            <Chip
              key={key}
              title={this.state.selection[key]}
              icon={{
                name: 'close',
                size: 12,
              }}
              iconRight
              onPress={() => this.removeSelectedItem(key)}
              type="outline"
              containerStyle={{ margin: 2 }}
            />
          );
        })}
      </View>
    );
  }
  renderInput() {
    return (
      <Input
        ref={(ingredientInput) => {
          this.ingredientInput = ingredientInput;
        }}
        style={{ flex: 1 }}
        placeholder="ingredient"
        leftIcon={<Ionicons name="search-outline" size={20} />}
        onChangeText={(query) => this.updateSuggestions(query)}
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

  renderSuggestions() {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ maxHeight: 250 }}
      >
        {Object.keys(this.state.suggestions).map((key) => (
          <ListItem
            key={key}
            bottomDivider
            onPress={() => this.addSelectedItem(key)}
          >
            <ListItem.Content
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <ListItem.Title style={{ flex: 1 }}>
                {this.state.suggestions[key]}
              </ListItem.Title>
              <Ionicons name="add-outline" size={20} />
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    );
  }
  renderButton() {
    return (
      <Button
        icon={<Ionicons name="checkmark-outline" color="#ffffff" size={20} />}
        type="solid"
        buttonStyle={{
          borderRadius: 0,
          marginTop: 10,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="Confirm"
        onPress={() => this.props.confirm(this.state.selection)}
      />
    );
  }
}

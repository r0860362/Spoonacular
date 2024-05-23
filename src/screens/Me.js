import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Tile, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';
import Colors from '../constants/Colors';

class Me extends Component {
  static defaultProps = { ...me };

  handleSettingsPress = () => {
    console.log('handleSettingsPress');
    this.props.navigation.navigate('Settings');
  };

  render() {
    const { title, subtitle } = styles;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: this.props.picture.large }}
          featured
          title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
          caption={this.props.email}
        />
        <Button
          title="Settings"
          buttonStyle={{ margin: 20 }}
          onPress={this.handleSettingsPress}
        />
        <View>
          <ListItem bottomDivider topDivider>
            <ListItem.Content>
              <ListItem.Title style={title}>Email: </ListItem.Title>
              <ListItem.Subtitle style={subtitle}>
                {this.props.email}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider topDivider>
            <ListItem.Content>
              <ListItem.Title style={title}>Phone: </ListItem.Title>
              <ListItem.Subtitle style={subtitle}>
                {this.props.phone}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider topDivider>
            <ListItem.Content>
              <ListItem.Title style={title}>Username: </ListItem.Title>
              <ListItem.Subtitle style={subtitle}>
                {this.props.login.username}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider topDivider>
            <ListItem.Content>
              <ListItem.Title style={title}>Birthday: </ListItem.Title>
              <ListItem.Subtitle style={subtitle}>
                {this.props.dob}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider topDivider>
            <ListItem.Content>
              <ListItem.Title style={title}>City: </ListItem.Title>
              <ListItem.Subtitle style={subtitle}>
                {this.props.location.city}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 10,
    color: Colors.subTitle,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default Me;

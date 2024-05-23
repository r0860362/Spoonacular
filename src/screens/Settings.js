import React, { Component } from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { ListItem, Icon, Switch, CheckBox, Card } from 'react-native-elements';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = { isNightMode: false };
  }

  toggleNightMode() {
    this.setState({ isNightMode: !this.state.isNightMode });
  }
  render() {
    return (
      <Card style={{ backgroundColor: '#F2F2F2', marginTop: 50 }}>
        <ScrollView style={{ display: 'flex', flexDirection: 'column' }}>
          <ListItem bottomDivider switchButton>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              onPress={() => this.toggleNightMode()}
            >
              <ListItem.Title style={{ flex: 1 }}>Night mode</ListItem.Title>
              <Switch
                style={{ height: 20, flex: 1 }}
                value={this.state.isNightMode}
                onValueChange={(value) => this.toggleNightMode()}
              />
            </TouchableOpacity>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Profile</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Password</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider style={{ marginTop: 30 }}>
            <ListItem.Content>
              <ListItem.Title>Sign out</ListItem.Title>
            </ListItem.Content>
            <Icon name="cancel" />
          </ListItem>
        </ScrollView>
      </Card>
    );
  }
}

export default Settings;

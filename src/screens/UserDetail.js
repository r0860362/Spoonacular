import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Tile, ListItem } from 'react-native-elements';
import Colors from '../constants/Colors';

class UserDetail extends Component {
  render() {
    // get user detail information from navigation state instead of hardcoded object
    const { picture, name, email, phone, login, dob, location } =
      this.props.route.params.user;
    const { title, subtitle } = styles;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large }}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
        />
        <View>
          <ListItem bottomDivider topDivider>
            <ListItem.Content>
              <ListItem.Title style={title}>Email: </ListItem.Title>
              <ListItem.Subtitle style={subtitle}>
                {login.email}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider topDivider>
            <ListItem.Content>
              <ListItem.Title style={title}>Phone: </ListItem.Title>
              <ListItem.Subtitle style={subtitle}>{phone}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider topDivider>
            <ListItem.Content>
              <ListItem.Title style={title}>Username: </ListItem.Title>
              <ListItem.Subtitle style={subtitle}>
                {login.username}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider topDivider>
            <ListItem.Content>
              <ListItem.Title style={title}>Birthday: </ListItem.Title>
              <ListItem.Subtitle style={subtitle}>{dob}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider topDivider>
            <ListItem.Content>
              <ListItem.Title style={title}>City: </ListItem.Title>
              <ListItem.Subtitle style={subtitle}>
                {location.city}
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

export default UserDetail;

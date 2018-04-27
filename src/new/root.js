import React from 'react';
import { View, Text, Button } from 'react-native';

class RootScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    return (
      <View>
        <Button title='login' onPress={() => this.props.navigation.navigate('Login')} />
        <Button title='signup' onPress={() => this.props.navigation.navigate('Signup')} />
      </View>
    );
  }
}

export default RootScreen;

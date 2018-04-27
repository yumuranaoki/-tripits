import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class SignupScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up'
  };

  render() {
    const styles = StyleSheet.create({
      textInput: {
        height: 30,
        margin: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
      },
    });

    return (
      <View>
        <TextInput
          placeholder="name"
          style={styles.textInput}
        />
        <TextInput
          placeholder='email'
          style={styles.textInput}
        />
        <TextInput
          placeholder='password'
          style={styles.textInput}
        />
        <TextInput
          placeholder='password confirmation'
          style={styles.textInput}
        />
      </View>
    );
  }
}

export default SignupScreen;

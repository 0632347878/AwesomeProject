import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginBtn from './components/LoginBtn';
import InputName from './components/InputName';
import InputPassword from './components/InputPassword';
import IconPassword from './components/IconPassword';
import IconUser from './components/IconUser';

export default class App extends React.Component {

  getUserLocationHandler = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text h1 style={styles.head1}>Wellcome</Text>
        <IconUser/><InputName/>
        <IconPassword/><InputPassword/>
        <LoginBtn onLogin = { this.getUserLocationHandler }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head1: {
    paddingBottom: 70,
    fontSize: 40,
  },

});

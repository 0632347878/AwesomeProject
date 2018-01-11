import React from 'react';
import { Button } from 'react-native';

const loginBtn = props => {
  return(
    <Button
      buttonStyle = {{ width: 400 }}
      title= "Log In"
      onPress={props.onLogin}/>
  );
};


export default loginBtn;

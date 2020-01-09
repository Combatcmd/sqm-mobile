import React from 'react';
import {View, Image} from 'react-native';

export default Logo = props => (
  <View style={{alignItems: 'center'}}>
    <Image
      {...props}
      style={[props.style]}
      source={require('Assets/logo.png')}
    />
  </View>
);

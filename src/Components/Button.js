import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default Button = props => (
  <TouchableOpacity
    {...props}
    style={[
      props.style,
      {
        backgroundColor: '#533D99',
        borderRadius: 4,
        padding: 15,
        alignItems: 'center',
      },
    ]}>
    <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

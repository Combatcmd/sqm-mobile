import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont()

export default Input = props => (
  <View style={[props.wrapperStyle, {flexDirection: 'column'}]}>
    {props.label && <View style={{marginBottom: 5}}>
      <Text style={{color: '#78777A'}}>{props.label}</Text>
    </View>}
    <View
      style={[
        {
          padding: 15,
          borderWidth: 1,
          borderColor: '#D0CED6',
          borderRadius: 2,
          marginBottom: 15,
          justifyContent: 'center',
        },
        props.inputStyle
      ]}>
      {props.iconName && <Icon name={props.iconName} color={props.iconColor} size={props.iconSize} style={{position: 'absolute', left: 15}}/>}
      <TextInput {...props} />
      <Text style={{position: 'absolute', right: 15}}>{props.type}</Text>
    </View>
  </View>
);

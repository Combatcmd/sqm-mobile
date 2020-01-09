import React from 'react';
import {View, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default Picker = props => (
  <>
    <Text style={{marginBottom: 5, color: '#78777A'}}>{props.label}</Text>
    <View
      style={[props.style, {
        padding: 15,
        borderWidth: 1,
        borderColor: '#D0CED6',
        borderRadius: 2,
        marginBottom: 15
      }]}>
      <RNPickerSelect
        {...props}
        Icon={() => (
          <View
            style={{
              backgroundColor: 'transparent',
              borderColor: '#6D55BD',
              borderTopWidth: 2,
              borderRightWidth: 2,
              width: 12,
              height: 12,
              transform: [{rotate: '135deg'}],
            }}
          />
        )}
      />
    </View>
  </>
);

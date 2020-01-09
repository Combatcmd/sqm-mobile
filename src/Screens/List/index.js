import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import {Input, ApartmentListItem} from 'Components';

const {width} = Dimensions.get('window');
export default List = () => {
  return <><ApartmentListItem/></>;
};

List.navigationOptions = {
  headerLeft: () => (
    <Input
      placeholder="Поиск по адресу"
      iconName="search"
      iconColor="#533D99"
      iconSize={20}
      wrapperStyle={{marginLeft: 15, width: width - 70}}
      inputStyle={{marginBottom: 0, paddingVertical: 8, paddingLeft: 45}}
    />
  ),
  headerTitle: () => null,
  headerRight: () => (
    <Icon
      name="filter-variant"
      color="#533D99"
      size={25}
      style={{marginRight: 15}}
    />
  ),
};

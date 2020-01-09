import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {Dimensions, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import {Input, ApartmentListItem} from 'Components';

import {fetchApartmentsSucceeded, fetchApartmentsFailed} from 'Actions';

const {width} = Dimensions.get('window');

export default List = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.apartments.apartments.data.data);
  const filter = useSelector(state => state.filter.searchQuery);

  useEffect(() => {
    const fetchApartments = async (startdate, enddate, sp, ep, city) => {
      let url = `http://sqm.kz/api/apartments?filter=[{"not":{"and":[{"name":"reservations","op":"any","val":{"name":"end_date","op":"ge","val":"${startdate}"}},{"name":"reservations","op":"any","val":{"name":"start_date","op":"le","val":"${enddate}"}}]}},{"name":"price","op":"gt","val":"${sp}"},{"name":"price","op":"lt","val":"${ep}"},{"name":"city_id","op":"eq","val":"${city}"}]`;
      let response = await axios(url);
      return dispatch(fetchApartmentsSucceeded(response));
    };
    fetchApartments(
      '2019-12-12',
      '2019-12-18',
      filter.sp,
      filter.ep,
      filter.city,
    );
  }, []);

  const renderApartmentListItem = item => <ApartmentListItem item={item} />;

  return (
    <>
      {data && (
        <FlatList
          data={data}
          renderItem={({item}) => renderApartmentListItem(item)}
        />
      )}
    </>
  );
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

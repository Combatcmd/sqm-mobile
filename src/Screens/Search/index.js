import React, {useState} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Logo, Picker, Input, Button} from 'Components';

import {setSearchQuery} from 'Actions';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  logoSmall: {
    resizeMode: 'contain',
    width: width / 3,
    height: width / 3 / 2.86,
    marginBottom: 50,
  },
  container: {
    paddingHorizontal: 15,
    paddingTop: 80,
    paddingBottom: 20,
    justifyContent: 'space-between',
    height: height,
  },
});

export default Search = ({navigation}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    sp: '',
    ep: '',
    city: null,
    rooms: null,
  });

  return (
      <View style={styles.container}>
        <View>
          <Logo style={styles.logoSmall} />
          <Picker
            onValueChange={v => setData({...data, city: v})}
            items={[
              {label: 'Нур-Султан', value: 1},
              {label: 'Алматы', value: 2},
            ]}
            label="Район"
            placeholder={{
              label: 'Любой район',
              value: null,
              color: '#292536',
            }}
          />
          <Picker
            style={{width: '50%'}}
            onValueChange={v => setData({...data, rooms: v})}
            items={[
              {label: '1', value: 1},
              {label: '2', value: 2},
              {label: '3', value: 3},
              {label: '4', value: 4},
            ]}
            label="Количество комнат"
            placeholder={{
              label: '',
              value: null,
              color: '#292536',
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Input
              onChangeText={v => setData({...data, sp: v})}
              value={data.sp}
              placeholder="От"
              label="Диапазон цен"
              type="₸"
              wrapperStyle={{width: '50%'}}
              inputStyle={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderRightWidth: 0,
                paddingRight: 30,
              }}
            />
            <Input
              onChangeText={v => setData({...data, ep: v})}
              value={data.ep}
              placeholder="До"
              label=" "
              type="₸"
              wrapperStyle={{width: '50%'}}
              inputStyle={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                paddingRight: 30,
              }}
            />
          </View>
        </View>
        <Button
          text="Искать"
          onPress={() => {
            dispatch(setSearchQuery(data))
            navigation.navigate('List');
          }}
        />
      </View>
  );
};

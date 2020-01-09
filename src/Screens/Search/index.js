import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Logo, Picker, Input, Button} from 'Components';

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

export default Search = ({navigation}) => (
  <View style={styles.container}>
    <View>
      <Logo style={styles.logoSmall} />
      <Picker
        items={[{label: 'label', value: 'value'}]}
        label="Район"
        placeholder={{
          label: 'Любой район',
          value: null,
          color: '#292536',
        }}
      />
      <Picker
        style={{width: '50%'}}
        items={[{label: 'label', value: 'value'}]}
        label="Количество комнат"
        placeholder={{
          label: '1',
          value: '1',
          color: '#292536',
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <Input
          placeholder="От"
          label="Диапазон цен"
          type="₸"
          wrapperStyle={{width: '50%'}}
          inputStyle={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRightWidth: 0,
            paddingRight: 30
          }}
        />
        <Input
          placeholder="До"
          label=" "
          type="₸"
          wrapperStyle={{width: '50%'}}
          inputStyle={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0, paddingRight: 30}}
        />
      </View>
    </View>
    <Button text="Искать" onPress={() => navigation.navigate('List')}/>
  </View>
);

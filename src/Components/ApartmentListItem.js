import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';

const mock = [
  {
    id: '1',
    image: [
      'https://astkt-photos-kr.kcdn.kz/b3/b32183da-851f-4128-826b-d110c6103b8a/4-750x470.jpg',
      'https://astkt-photos-kr.kcdn.kz/b3/b32183da-851f-4128-826b-d110c6103b8a/2-full.jpg',
    ],
    map:
      'https://s3-alpha-sig.figma.com/img/95ec/a07a/aa3240fc14d756b23b6f3d2060e0655d?Expires=1575244800&Signature=MZM6aPgDQg9b8Ha-Jfb9Zy9GJ5xZRpAMfvRly19LBUzgjfTL8UtpCKmbigGCdo85X09qA~qaQQ3PIKjJJytSO4vV4iq9Udwau9N~mXBUzx5IhXvtOrHahLgqLfXxCdkWdt6g4i13tW2NK-EgU2O~84FCfUBPIF5kEf4Jn-Xgx5V-2n6t9gDkw~0TRmHKQoVzlPSR18LMWdSapjKD0yXObBU2UlM6FeyXie4xK6XDxGhVYIA2LDZYRIc-xXOEIAyklveRCJQgqsj5eRvMquAzWx2eI~joxdQ6GEUcbfnVwz3gkbjUiz8m~eaHe~L1AU4tlkGToL~fbzkFlQzkFFxMQQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'ЖК «Central Avenue Hyde Downtown»',
    address: 'Алматы, пр-т Райымбека, 126',
    price: '10 000 ₸ / сут.',
    square: '50 м2',
    rooms: '2 ком.',
    dateStart: '11 11 2019',
    dateEnd: '12 8 2019',
  },
  {
    id: '2',
    image: [
      'https://astkt-photos-kr.kcdn.kz/b3/b32183da-851f-4128-826b-d110c6103b8a/4-750x470.jpg',
      'https://astkt-photos-kr.kcdn.kz/b3/b32183da-851f-4128-826b-d110c6103b8a/2-full.jpg',
    ],
    map:
      'https://s3-alpha-sig.figma.com/img/95ec/a07a/aa3240fc14d756b23b6f3d2060e0655d?Expires=1575244800&Signature=MZM6aPgDQg9b8Ha-Jfb9Zy9GJ5xZRpAMfvRly19LBUzgjfTL8UtpCKmbigGCdo85X09qA~qaQQ3PIKjJJytSO4vV4iq9Udwau9N~mXBUzx5IhXvtOrHahLgqLfXxCdkWdt6g4i13tW2NK-EgU2O~84FCfUBPIF5kEf4Jn-Xgx5V-2n6t9gDkw~0TRmHKQoVzlPSR18LMWdSapjKD0yXObBU2UlM6FeyXie4xK6XDxGhVYIA2LDZYRIc-xXOEIAyklveRCJQgqsj5eRvMquAzWx2eI~joxdQ6GEUcbfnVwz3gkbjUiz8m~eaHe~L1AU4tlkGToL~fbzkFlQzkFFxMQQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'ЖК «Central Park»',
    address: 'Алматы, ул. Абиша Кекилбаева, 38Б, кв. 15',
    price: '12 500 ₸ / сут.',
    square: '36 м2',
    rooms: '1 ком.',
    dateStart: '12 1 2019',
    dateEnd: '12 7 2019',
  },
  {
    id: '3',
    image: [
      'https://astkt-photos-kr.kcdn.kz/b3/b32183da-851f-4128-826b-d110c6103b8a/4-750x470.jpg',
      'https://astkt-photos-kr.kcdn.kz/b3/b32183da-851f-4128-826b-d110c6103b8a/2-full.jpg',
    ],
    map:
      'https://s3-alpha-sig.figma.com/img/95ec/a07a/aa3240fc14d756b23b6f3d2060e0655d?Expires=1575244800&Signature=MZM6aPgDQg9b8Ha-Jfb9Zy9GJ5xZRpAMfvRly19LBUzgjfTL8UtpCKmbigGCdo85X09qA~qaQQ3PIKjJJytSO4vV4iq9Udwau9N~mXBUzx5IhXvtOrHahLgqLfXxCdkWdt6g4i13tW2NK-EgU2O~84FCfUBPIF5kEf4Jn-Xgx5V-2n6t9gDkw~0TRmHKQoVzlPSR18LMWdSapjKD0yXObBU2UlM6FeyXie4xK6XDxGhVYIA2LDZYRIc-xXOEIAyklveRCJQgqsj5eRvMquAzWx2eI~joxdQ6GEUcbfnVwz3gkbjUiz8m~eaHe~L1AU4tlkGToL~fbzkFlQzkFFxMQQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'ЖК «Central Avenue Hyde Downtown»',
    address: 'Алматы, пр-т Райымбека, 126',
    price: '10 000 ₸',
    square: '50 м2',
    rooms: '2 ком.',
    dateStart: '12 3 2019',
    dateEnd: '12 5 2019',
  },
];

export default ApartmentListItem = props => (
  <TouchableOpacity>
    <View style={{padding: 15}}>
      <Image
        source={{
          uri: mock[0].image[0],
        }}
        style={{height: 200}}
      />
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{flexShrink: 1}}>{mock[0].name}</Text>
          <Text>{mock[0].price}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{flexShrink: 1}}>{mock[0].address}</Text>
          <Text>{`${mock[0].rooms} • ${mock[0].square}`}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

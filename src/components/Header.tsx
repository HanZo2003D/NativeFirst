import {View, Text} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

type Props = {};

const Header = (props: Props) => {
  return (
    <View
      style={{
        padding: 20,
        width: '100%',

        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Icons name="arrow-back" size={30} />
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          marginRight: 30,
          fontSize: 24,
          fontWeight: '800',
          color: '#327958',
        }}>
        Header
      </Text>
    </View>
  );
};

export default Header;

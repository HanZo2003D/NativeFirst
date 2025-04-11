import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/Header';

type Props = {};

const Contact = (props: Props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Header />
      <Text>Header</Text>
    </View>
  );
};

export default Contact;

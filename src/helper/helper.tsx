Colors


theme: #327958

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type Props = {};

const OptVerfication = ({route}: {route: any}) => {
  const {email} = route.params;
  return (
    <View style={styles.container}>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default OptVerfication;

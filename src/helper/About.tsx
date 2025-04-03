import {View, Text, Button} from 'react-native';
import React from 'react';
import GridExample from '../components/GridExample';

import {useNavigation} from '@react-navigation/native';

type Props = {
  onPress: () => void;
};

const About = (onPress: Props) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate('map');
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'grey',

          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'lightgrey',

          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',

          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>3</Text>
      </View>
      <View
        style={{
          backgroundColor: 'lightgrey',

          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>4</Text>
      </View>
      <View
        style={{
          backgroundColor: 'grey',

          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
          5
        </Text>
      </View>
      <GridExample />
    </View>
  );
};

export default About;

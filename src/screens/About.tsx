import {View, Text} from 'react-native';
import React from 'react';
import GridExample from '../components/GridExample';
import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const About = (props: Props) => {
  const navigation = useNavigation();

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
      <Button onPress={handlePress}>
        <Text>Hi</Text>
      </Button>
    </View>
  );
};

export default About;

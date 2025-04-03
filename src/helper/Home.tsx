import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';
import LinearGradient from 'react-native-linear-gradient';
import CircularProfile from '../components/ProfileDesign';

const Home = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('about');
  };
  return (
    <View
      style={{
        flex: 1,
        margin: 20,

        gap: 10,
      }}>
      <Text>Welcome to my App</Text>

      <ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('gogo');
            }}
            style={styles.gridBox}>
            <CircularProfile />

            <CircularProfile />
            <CircularProfile />
            <CircularProfile />
            <CircularProfile />
            <CircularProfile />
            <CircularProfile />
            <CircularProfile />
            <CircularProfile />
            <CircularProfile />
            <CircularProfile />
            <CircularProfile />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Button onPress={handlePress}>Go to About</Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  gradient: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    height: 180,
    width: 180,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridBox: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

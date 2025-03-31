import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CircularProfile = () => {
  return (
    <View style={styles.container}>
      {/* Circular Gradient Background */}
      <LinearGradient
        colors={['#ff7e5f', '#feb47b']}
        style={styles.gradientCircle}>
        {/* Image on Top of Gradient */}
        <Image
          source={require('../screens/assets/nature.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
      </LinearGradient>

      {/* Name/Text Above */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  gradientCircle: {
    width: 150,
    height: 200,
    borderRadius: 20, // Makes it circular

    alignItems: 'center',
  },
  profileImage: {
    width: 130, // Slightly smaller than the gradient
    height: 140,
    borderRadius: 18, // Makes it circular
    marginTop: 10,
  },
  name: {
    fontSize: 16,

    color: 'black',
    marginTop: 12,
  },
});

export default CircularProfile;

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  title: string;
  price: number;
  navigation: any;
  foodCategory?: string;
  image: any;
};

const FoodCard = ({title, price, navigation, foodCategory, image}: Props) => {
  const [like, setLike] = useState(false);
  const handlePress = () => {
    setLike(!like);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail', {title, price, foodCategory, image})
        }>
        <Image source={image} style={styles.chickenImage} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
        <TouchableOpacity onPress={handlePress}>
          <Icon
            name={like ? 'heart' : 'heart-outline'}
            size={25}
            color={like ? 'red' : 'black'}
            style={{paddingRight: 10, paddingTop: 10}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 140,
    marginRight: 20,
    shadowColor: '#000',
  },
  chickenImage: {
    height: 150,
    width: '100%',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 4,
  },
  price: {
    fontSize: 12,
    color: '#327958',
  },
});
export default FoodCard;

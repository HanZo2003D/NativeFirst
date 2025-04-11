import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  id?: number;
  title: string;
  price: number;
  navigation: any;
  foodCategory?: string;
  image: any;
};

const FoodCard = ({
  title,
  price,
  navigation,
  foodCategory,
  image,
  id,
}: Props) => {
  const [like, setLike] = useState(false);
  const handlePress = () => {
    setLike(!like);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail', {title, price, foodCategory, image, id})
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
            style={styles.icon}
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
  icon: {
    paddingRight: 10,
    paddingTop: 10,
  },
});
export default FoodCard;

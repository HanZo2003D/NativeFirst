import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
  onPress?: () => void;
  rightIcon: any;
};

const SettingOptionComponent = ({title, rightIcon, onPress}: Props) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={rightIcon} size={30} color={'black'} />
      <Text style={styles.text}>{title}</Text>
      <Icons name={'chevron-right'} size={20} color={'black'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F7F7',
    width: '100%',
    height: 60,
    marginBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',

    flex: 1,
    marginHorizontal: 20,
  },
});
export default SettingOptionComponent;

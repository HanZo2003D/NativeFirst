import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/ButtonComponent';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {logout} from '../../store/slice/authSlice';

type Props = {};

const SettingsScreen = ({navigation}: {navigation: any}) => {
  return (
    <View
      style={{
        flex: 1,

        padding: 20,
        backgroundColor: '#ccc',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'red',
          marginBottom: 20,
        }}>
        <Text style={{fontSize: 24, fontWeight: 900}}>Profile</Text>
        <Icon name="settings" size={30} color={'#327958'} />
      </View>
      <View
        style={{
          backgroundColor: 'green',
          flexDirection: 'row',
          width: '100%',
        }}>
        <Image
          source={require('../assets/person.jpg')}
          style={styles.profileIcons}
        />
        <View style={{marginLeft: 15, paddingTop: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>UserName</Text>
          <Text>emailll</Text>
        </View>
      </View>
      <Button
        title="Logout"
        onPress={console.log}
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileIcons: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
export default SettingsScreen;

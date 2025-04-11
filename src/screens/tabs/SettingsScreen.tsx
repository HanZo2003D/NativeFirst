import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/ButtonComponent';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {logout} from '../../store/slice/authSlice';
import {useNavigation} from '@react-navigation/native';
import SettingOptionComponent from '../../components/SettingOptionComponent';

type Props = {};

const SettingsScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const naviagtion = useNavigation<any>();

  const HandleLogout = (): void => {
    dispatch(logout());

    Alert.alert('Logout Successful!');

    navigation.navigate('login');
  };
  return (
    <View
      style={{
        flex: 1,

        padding: 20,

        alignItems: 'center',
        paddingBottom: 0,
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',

          marginBottom: 20,
        }}>
        <Text style={{fontSize: 24, fontWeight: 900}}>Profile</Text>
        <Icon name="settings" size={30} color={'#327958'} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginBottom: 22,
          backgroundColor: '#F8F7F7',
          elevation: 5,
          paddingVertical: 20,
          paddingHorizontal: 20,
          borderRadius: 15,
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
      <SettingOptionComponent
        title="Profile "
        rightIcon={'person-outline'}
        onPress={() => navigation.navigate('profile')}
      />
      <SettingOptionComponent
        title="Setting "
        rightIcon={'settings-outline'}
        onPress={() => navigation.navigate('setting')}
      />
      <SettingOptionComponent
        title="Contact"
        rightIcon={'mail-outline'}
        onPress={() => navigation.navigate('contact')}
      />
      <SettingOptionComponent
        title="Share App"
        rightIcon={'share-social-outline'}
      />

      <SettingOptionComponent title="Help" rightIcon={'help-circle-outline'} />
      <TouchableOpacity
        onPress={HandleLogout}
        style={{
          flexDirection: 'row',

          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          width: '50%',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '900',
            marginRight: 5,
            color: '#327958',
          }}>
          Logout
        </Text>
        <Icon name="log-out-outline" size={30} color={'#327958'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profileIcons: {
    width: 90,
    height: 90,
    borderRadius: 90,
  },
});
export default SettingsScreen;

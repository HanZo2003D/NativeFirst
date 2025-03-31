import React, {use, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const navigation = useNavigation();

  const handleSignUp = (): void => {
    if (email && password) {
      Alert.alert('SignUp Successful!', `Welcome, ${name}!`);
      navigation.navigate('Tabs');
    } else {
      Alert.alert('Error', 'Please enter both email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up </Text>
      <Text style={styles.subtitle}>
        Create account and choose favourite menu
      </Text>
      <Text style={styles.lable}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.lable}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.lable}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Register" onPress={handleSignUp} style={{marginTop: 15}} />
      <Text style={styles.footerText}>
        Have an account? <Text style={styles.link}>Sign In</Text>
      </Text>
      <View
        style={{
          flex: 1,

          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 15,
        }}>
        <Text style={{color: 'grey', fontSize: 14}}>
          By clicking Register you agree yo our
        </Text>
        <Text style={{color: '#327958', fontSize: 14, fontWeight: 'bold'}}>
          Services and Data Policy
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',

    color: '#333',
  },
  subtitle: {
    color: 'grey',
    marginTop: 10,
    fontWeight: '400',
    marginBottom: 20,
  },
  lable: {
    width: '80%',
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
    fontWeight: '700',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },

  footerText: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
  },
  link: {
    color: '#327958',
    fontWeight: 'bold',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
});

export default SignUp;

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Button from '../../components/Button';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (): void => {
    if (email && password) {
      Alert.alert('Login Successful!', `Welcome back, ${email}!`);
    } else {
      Alert.alert('Error', 'Please enter both email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}> Sign to your account</Text>
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
      <Text style={{color: '#327958', fontWeight: 'bold', marginBottom: 25}}>
        Forgot Password?
      </Text>
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.footerText}>
        Don't have an account? <Text style={styles.link}>Sign Up</Text>
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 30,
        }}>
        <View style={styles.line} />
        <Text style={{marginHorizontal: 10, fontSize: 14, color: 'grey'}}>
          Or with
        </Text>
        <View style={styles.line} />
      </View>
      <Button
        title="Sign in with Google"
        onPress={handleLogin}
        style={{
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#ccc',
          marginBottom: 10,
        }}
        textStyle={{color: '#000', fontSize: 14}}
      />
      <Button
        title="Sign in with Apple"
        onPress={handleLogin}
        style={{backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc'}}
        textStyle={{color: '#000', fontSize: 14}}
      />
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

export default Login;

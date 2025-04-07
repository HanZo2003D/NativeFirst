import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {View, TextInput, StyleSheet, Text, Alert} from 'react-native';
import Button from '../../components/ButtonComponent';

const OptVerfication = ({route}: {route: any}) => {
  const [otp, setOtp] = useState(['', '', '', '']); // Manage OTP state
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const {email} = route.params;
  const navigation = useNavigation<any>();

  // Clear OTP whenever the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      setOtp(['', '', '', '']); // Reset OTP on screen focus
    }, []),
  );

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically focus next input box if the user types a number
    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    // Handle backspace to move focus to the previous box
    if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  const handleNavigate = () => {
    const enteredOtp = otp.join(''); // Combine the OTP into a single string
    if (enteredOtp === '1111') {
      navigation.navigate('Tabs');
    } else {
      Alert.alert('Error', 'Wrong OTP! Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 24}}>Verification Email</Text>
      <Text style={{color: 'grey'}}>
        Please enter the code we just send to email
      </Text>
      <Text style={{fontWeight: '400'}}>{email}</Text>
      <Text style={{fontWeight: '300'}}>
        If you didn't recived a code?
        <Text style={{color: '#327958', fontWeight: '600'}}>Resend</Text>
      </Text>
      <View style={styles.otpBox}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            ref={ref => {
              inputRefs.current[index] = ref; // Assign ref without returning it
            }} // Correctly assign ref
            style={styles.input}
            keyboardType="numeric"
            maxLength={1} // Restrict to a single character
            value={otp[index]}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={event => handleKeyPress(event, index)}
          />
        ))}
      </View>
      <Button
        title="Verify"
        onPress={handleNavigate}
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
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  otpBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  input: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#f9f9f9',
  },
});

export default OptVerfication;

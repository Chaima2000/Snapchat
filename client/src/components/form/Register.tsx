import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = async () => {
    console.log('Register button pressed');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Username:', username);

    try {
      const response = await fetch('https://snapchat.epidoc.eu/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, username }),
      });
      const data = await response.json();
      console.log('Api response:', data);

      if (response.ok) {
        console.log('Registration successful');
        Alert.alert('Success', 'User registered successfully');
        navigation.navigate('Login', { userInfo: { email, username } });
      } else {
        console.log('Registration error:', data.message);
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      console.error('Network or server error:', error);
      Alert.alert('Oups', 'It doesn\'t work, try again');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome on Snapchat</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFC00',
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: '#f7f7f7',
  },
  text: {
    color: '#000',
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#11adfe',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Register;

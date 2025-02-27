import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';

import { useAuth } from '../../context/AuthContext';

// Login Container
const LoginContainer = ({ onLogin, navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      console.log('User logged in successfully');
      // Navigate to backend URL
      Linking.openURL('https://superpark-backend.onrender.com/');
      onLogin();
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <View style={styles.loginSignContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
        <Text style={styles.linkText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

// Main Greeter Component
const LoginScreen = ({navigation}) => {
  const [screen, setScreen] = useState('login'); // Changed initial state to "login"

  //TEMP code for auth
  const {setAuth} = useAuth();

  const handleLoginSuccess = () => {
    // This function can remain empty as we're now navigating directly to the backend
    // Or you could use it for additional actions if needed
    setAuth(true);
  };

  if (screen === 'welcome') {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.welcomeSubText}>You are now logged in.</Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => setScreen('login')}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <LoginContainer onLogin={handleLoginSuccess} navigation={navigation} />
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  subContainer: {
    width: '50%',
    borderWidth: 2,
    borderColor: '#007BFF',
    borderRadius: 10,
    maxWidth: 500,
    backgroundColor: '#333',
    padding: 20,
    alignItems: 'center',
  },
  loginSignContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#007BFF',
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
    height: 45,
  },
  buttonContainer: {
    backgroundColor: '#007BFF',
    width: 100,
    margin: 10,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  linkText: {
    color: '#007BFF',
    fontSize: 16,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  welcomeSubText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
});

export default LoginScreen;
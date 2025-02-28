import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import { useAuth } from '../../context/AuthContext';

// function to authenticate user when logging in
const authLogin = async ({username, password, setWrong, setAuth}) => {

  try {
    const res = await fetch('https://superpark-backend.onrender.com/auth/driver/token', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': `${username}`,
        'password': `${password}`
      })
    });

    // check if status if ok
    if(res.status === 201) {
      const js = await res.json();

      if(Platform.OS === 'web') {
        localStorage.setItem('token', js.token);
      }

      setAuth(true);
    } else {
      setWrong(true);
    }
  } catch(err) {
    console.error("error", err);
  }
}


// Login Container
const LoginScreen = ({ navigation, route }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [wrong, setWrong] = useState(false);

  //TEMP auth effect to move to content screens
  const {setAuth} = useAuth();

  // Hook to alert that username or password is wrong
  React.useEffect(() => {
    if(wrong == true) {
      alert("Wrong username or password");
    }
    setWrong(false);
  }, [wrong]); 

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
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
          <TouchableOpacity style={styles.buttonContainer} 
          onPress={async () => {(username === '' || password === '')?
          alert("Username and password field should not be empty")
          :
          authLogin({username, password, setWrong, setAuth})
          }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
            <Text style={styles.linkText}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
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
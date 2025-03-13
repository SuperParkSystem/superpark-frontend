import React, { use, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Platform } from 'react-native';
import { useAuth } from '../../context/AuthContext';

const signupAPI = async ({userType, formData, setSuccess}) => {
  const driverURL = 'https://superpark-backend.onrender.com/auth/driver';
  const parkingOwnerURL = 'https://superpark-backend.onrender.com/auth/parkingOwner';
  const productOwnerURL = 'https://superpark-backend.onrender.com/auth/productOwner';

  const url = (userType === 'Driver'?driverURL:(userType==='Parking Lot Owner')?parkingOwnerURL:productOwnerURL);

  // make api call to backend to register new user
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'accept': '*/*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'email': `${formData.email}`,
      'password': `${formData.password}`,
    })
  });
  // parse response
  if(res.status === 400) {
    setSuccess(-1);
  } else {
    // Form is valid, proceed with submission
    setSuccess(1);
  }
}

const SignupPage = ({navigation, route}) => {

  // get user type from route
  const {userType} = route.params;

  // Form state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Error state
  const [errors, setErrors] = useState({});
  // Success message
  const [success, setSuccess] = useState(0);

  // Backend URL
  const backendUrl = 'https://superpark-backend.onrender.com/';

  // Handle input changes
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};

    // Email validation - lowercase with valid format
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|edu|org|net|gov|mil|io|co)$/.test(formData.email)) {
      newErrors.email = 'Email must be lowercase and have a valid format (e.g., example@domain.com)';
    } else if (formData.email !== formData.email.toLowerCase()) {
      newErrors.email = 'Email must be in lowercase';
    }
    // Password validation - complex requirements
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async ({email, password}) => {
    if (validateForm()) {
      await signupAPI({userType, formData, setSuccess});
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create {userType} Account</Text>

        {(success == 1) && (
          <View style={styles.successMessage}>
            <Text style={styles.successText}>Account created successfully! Welcome aboard.</Text>
          </View>
        )}

        {(success == -1) && (
          <View style={styles.failureMessage}>
            <Text style={styles.successText}>Bad request or account already exists.</Text>
          </View>
        )}

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="example@domain.com"
            placeholderTextColor={'grey'}
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>

        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={[styles.input, errors.password && styles.inputError]}
            placeholder="Min 8 chars"
            placeholderTextColor={'grey'}
            value={formData.password}
            onChangeText={(text) => handleChange('password', text)}
            secureTextEntry
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={() => {handleSubmit(formData.email, formData.password)}}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text 
            style={styles.loginLink} 
            onPress={() => navigation.navigate('Login', {userType: userType})} // Navigate to Login page
          >
            Log In
          </Text>
        </Text>

        {/* User Type Link */}
        <Text style={styles.loginText}>
          Select User Type again?{' '}
          <Text 
            style={styles.loginLink} 
            onPress={() => navigation.navigate('User Type')} // Navigate to Login page
          >
            User Types
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  formContainer: {
    width: 700,
    maxWidth: 700,
    backgroundColor: '#1f2937',
    borderRadius: 8,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: Platform.OS === 'web' ? '40%' : '100%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#60a5fa',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    color: '#d1d5db',
    marginBottom: 8,
    fontSize: 14,
  },
  input: {
    backgroundColor: '#374151',
    borderWidth: 1,
    borderColor: '#4b5563',
    borderRadius: 6,
    padding: 12,
    color: '#fff',
    fontSize: 16,
  },
  inputError: {
    borderColor: '#ef4444',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
    marginTop: 4,
  },
  successMessage: {
    backgroundColor: '#1e3a8a',
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
  },
  failureMessage: {
    backgroundColor: '#BA3F3F',
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
  },
  successText: {
    color: '#dbeafe',
    fontSize: 14,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#9ca3af',
    textAlign: 'center',
    marginTop: 16,
  },
  loginLink: {
    color: '#60a5fa',
    fontWeight: 'bold',
  },
});

export default SignupPage;
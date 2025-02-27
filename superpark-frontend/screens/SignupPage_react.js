import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const SignupPage = () => {
  const navigation = useNavigation(); // Initialize navigation

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    username: '',
    password: '',
    retypePassword: '',
  });

  // Error state
  const [errors, setErrors] = useState({});
  // Success message
  const [success, setSuccess] = useState(false);

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

    // First name validation - only alphabets
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      newErrors.firstName = 'First name should only contain alphabets';
    }

    // Last name validation - only alphabets (optional)
    if (formData.lastName && !/^[A-Za-z]+$/.test(formData.lastName)) {
      newErrors.lastName = 'Last name should only contain alphabets';
    }

    // Phone number validation - 10 digits
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be a 10-digit integer';
    }

    // Email validation - lowercase with valid format
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|edu|org|net|gov|mil|io|co)$/.test(formData.email)) {
      newErrors.email = 'Email must be lowercase and have a valid format (e.g., example@domain.com)';
    } else if (formData.email !== formData.email.toLowerCase()) {
      newErrors.email = 'Email must be in lowercase';
    }

    // Username validation - required
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }

    // Password validation - complex requirements
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol';
    }

    // Retype password validation - must match password
    if (!formData.retypePassword) {
      newErrors.retypePassword = 'Please retype your password';
    } else if (formData.password !== formData.retypePassword) {
      newErrors.retypePassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted successfully:', formData);
      setSuccess(true);
      Alert.alert('Success', 'Account created successfully! Welcome aboard.', [
        { 
          text: 'OK', 
          onPress: async () => {
            try {
              // Navigate to backend
              await Linking.openURL(backendUrl);
              
              // Set timeout to simulate returning from backend
              setTimeout(() => {
                // This will execute after the "return" from backend
                Alert.alert('Backend Connection', 'Successfully connected to and returned from backend!');
              }, 3000); // 3 seconds delay to simulate the process
            } catch (error) {
              console.error('Error connecting to backend:', error);
              Alert.alert('Error', 'Failed to connect to backend. Please try again.');
            }
          }
        }
      ]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create Account</Text>

        {success && (
          <View style={styles.successMessage}>
            <Text style={styles.successText}>Account created successfully! Welcome aboard.</Text>
          </View>
        )}

        {/* First Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>First Name *</Text>
          <TextInput
            style={[styles.input, errors.firstName && styles.inputError]}
            placeholder="Enter First Name"
            value={formData.firstName}
            onChangeText={(text) => handleChange('firstName', text)}
          />
          {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
        </View>

        {/* Last Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={[styles.input, errors.lastName && styles.inputError]}
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChangeText={(text) => handleChange('lastName', text)}
          />
          {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
        </View>

        {/* Phone Number */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number *</Text>
          <TextInput
            style={[styles.input, errors.phoneNumber && styles.inputError]}
            placeholder="10-digit number"
            value={formData.phoneNumber}
            onChangeText={(text) => handleChange('phoneNumber', text)}
            keyboardType="numeric"
          />
          {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}
        </View>

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address *</Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="example@domain.com"
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>

        {/* Username */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username *</Text>
          <TextInput
            style={[styles.input, errors.username && styles.inputError]}
            placeholder="Enter Username"
            value={formData.username}
            onChangeText={(text) => handleChange('username', text)}
          />
          {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
        </View>

        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password *</Text>
          <TextInput
            style={[styles.input, errors.password && styles.inputError]}
            placeholder="Min 8 chars with upper, lower, number & symbol"
            value={formData.password}
            onChangeText={(text) => handleChange('password', text)}
            secureTextEntry
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>

        {/* Retype Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Retype Password *</Text>
          <TextInput
            style={[styles.input, errors.retypePassword && styles.inputError]}
            placeholder="Retype Password"
            value={formData.retypePassword}
            onChangeText={(text) => handleChange('retypePassword', text)}
            secureTextEntry
          />
          {errors.retypePassword && <Text style={styles.errorText}>{errors.retypePassword}</Text>}
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text 
            style={styles.loginLink} 
            onPress={() => navigation.navigate('Login')} // Navigate to Login page
          >
            Log In
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
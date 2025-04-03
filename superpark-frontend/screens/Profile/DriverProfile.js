import {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Platform, Button, Touchable, TouchableOpacity} from "react-native";

import sampleStyles from '../../constants/SampleStyles';
import { CustomButton, CustomLargeButton } from '../../components/Button';

// Function to submit the feedback and store it in the database
const sumbitFeedback = ({feedback, email}) => {
  alert('Feedback submitted');
}

const DriverProfileScreen = () => {

  useEffect(() => {
    // Function to get the driver profile details
    async function getProfile() {
      const url = 'https://superpark-backend.onrender.com/auth/driver/';

      const res = await fetch(url, {
        headers: {
          'accept': 'application/json'
        }
      });

      console.log(res);
    }

    getProfile();
  }, [])

  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('d@gmail.com');
  const [name, setName] = useState('Driver 1');


    return (
      <View style={sampleStyles.container}>
        <Text style={sampleStyles.labelText}>Name: {name}</Text>
        <Text style={sampleStyles.labelText}>Email: {email}</Text>


        {/* Feedback code */}
        <Text style={sampleStyles.labelText}>Feedback</Text>
        <TextInput 
        style={styles.feedback}
        onChange={feedback => setFeedback(feedback)}
        placeholder='Enter Feedback here'
        multiline={true}
        />

        <CustomLargeButton title={'Submit Feedback'} onPress={sumbitFeedback} />
      </View>
    );
}

export default DriverProfileScreen;

const styles = StyleSheet.create({
  feedback: {
    backgroundColor: 'white',
    width: (Platform.OS === 'web') ? '40%' : '100%',
    height: (Platform.OS === 'web') ? '30%' : 30,
    fontSize: 15,
  }
})
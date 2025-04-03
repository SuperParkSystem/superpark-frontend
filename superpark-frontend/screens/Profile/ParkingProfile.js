import {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Platform, Button, Touchable, TouchableOpacity} from "react-native";
import * as SecureStorage from 'expo-secure-store';

import sampleStyles from '../../constants/SampleStyles';
import { CustomButton, CustomLargeButton } from '../../components/Button';


const ParkingProfileScreen = () => {
  const [rate, setRate] = useState(0);
  const [changerate, setChangeRate] = useState(false);
  const [email, setEmail] = useState('d@gmail.com');
  const [name, setName] = useState('Parking 1');


  useEffect(() => {

    // Function to get the rate
    async function getRate() {
      const url = 'https://superpark-backend.onrender.com/parkingOwner/paymentPolicy';
      var tok
      if(Platform.OS === 'web') {
        tok = JSON.parse(localStorage.getItem('SuperParkToken'))['Token']
      } else if(Platform.OS === 'ios' || Platform.OS === 'android') {
        tok = SecureStorage.getItem('SuperParkToken');
        tok = JSON.parse(tok)['Token'];
      }

      const res = await fetch(url, {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${tok}`
        }
      });

      console.log(res.json());
    }

    getRate();
  }, [rate]);

  useEffect(() => {
    async function uploadRate() {
      const url = `https://superpark-backend.onrender.com/parkingOwner/paymentPolicy?value=${rate}`;
      var tok
      if(Platform.OS === 'web') {
        tok = JSON.parse(localStorage.getItem('SuperParkToken'))['Token']
      } else if(Platform.OS === 'ios' || Platform.OS === 'android') {
        tok = SecureStorage.getItem('SuperParkToken');
        tok = JSON.parse(tok)['Token'];
      }

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${tok}`
        },
        body: ''
      });

      setRate(rate);

      console.log(res.json());
    }

    uploadRate();
  }, [changerate])


    return (
      <View style={sampleStyles.container}>
        <Text style={sampleStyles.labelText}>Name: {name}</Text>
        <Text style={sampleStyles.labelText}>Email: {email}</Text>


        {/* Feedback code */}
        <View style={styles.rateContainer}>
          <Text style={sampleStyles.labelText}>Set Rate</Text>

          <TextInput 
            style={styles.rate}
            onChange={text => setRate(Number(text))}
            placeholder='Enter Rate here'
            value={rate.toString()}
         />

         <CustomButton title={'Set Rate'} onPress={() => {setChangeRate(!changerate), alert("Rate changed")}}/>
        </View>

      </View>
    );
}

export default ParkingProfileScreen;

const styles = StyleSheet.create({
  rateContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  rate: {
    width: 100,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginLeft: 10,
  }
})
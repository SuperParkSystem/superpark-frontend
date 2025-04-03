import {useState} from 'react';
import {View, Text} from "react-native";

import sampleStyles from '../../constants/SampleStyles';

const ProductProfileScreen = () => {
  const [email, setEmail] = useState('owner@x.com');
  const [name, setName] = useState('Product 1');
  
    return (
      <View style={sampleStyles.container}>
        <Text style={sampleStyles.labelText}>Name: {name}</Text>
        <Text style={sampleStyles.labelText}>Name: {email}</Text>
      </View>
    );
}

export default ProductProfileScreen;
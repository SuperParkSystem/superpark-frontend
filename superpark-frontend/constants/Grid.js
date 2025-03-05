import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Button, Alert } from 'react-native';

const Grid = ({ grid }) => {
  const [selectedCell, setSelectedCell] = useState(null);

  const toggleCell = (index) => {
    setSelectedCell(index === selectedCell ? null : index);
  };

  const renderRow = ({ item: rowIndex }) => (
    <View style={styles.row}>
      {Array.from({ length: grid.cells }).map((_, cellIndex) => {
        const index = rowIndex * grid.cells + cellIndex;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.item, selectedCell === index && styles.selectedItem]}
            onPress={() => toggleCell(index)}
          />
        );
      })}
    </View>
  );

  return (
    <View>
      <FlatList
      data={Array.from({ length: grid.rows }, (_, i) => i)}
      renderItem={renderRow}
      keyExtractor={(item) => item.toString()}
      />
      
      <Button title='Book Parking Slot' onPress={() => {Alert.alert("Parking space booked")}} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 40,
    height: 40,
    backgroundColor: 'aquamarine',
    margin: 10,
  },
  selectedItem: {
    backgroundColor: 'red',
  },
});

export default Grid;

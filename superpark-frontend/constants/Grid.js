import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Button, Alert, Text } from 'react-native';

const Grid = ({ grid }) => {
  const [selectedCells, setSelectedCells] = useState(new Set());

  const totalCells = grid.cells * grid.rows;
  const threshold = Math.ceil(totalCells * 0.1); // 10% threshold

  const toggleCell = (index) => {
    setSelectedCells((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const renderRow = ({ item: rowIndex }) => (
    <View style={styles.row}>
      {Array.from({ length: grid.cells }).map((_, cellIndex) => {
        const index = rowIndex * grid.cells + cellIndex;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.item, selectedCells.has(index) && styles.selectedItem]}
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

      {totalCells - selectedCells.size <= threshold && (
        <Text style={styles.warningText}>Parking lot is about to become full!</Text>
      )}

      <Button title='Book Parking Slot' onPress={() => Alert.alert("Parking space booked")} />
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
  warningText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
});

export default Grid;

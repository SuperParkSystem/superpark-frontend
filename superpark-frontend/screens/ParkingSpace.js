import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Grid from '../constants/Grid';

import sampleStyles from "../constants/SampleStyles";

const ParkingSpaceScreen = () => {
    // grid size
    const gridBase = {
        cells: 5,
        rows: 5,
    };

    const [grid, setGrid] = useState(gridBase);
    const [inputCells, setCells] = useState(grid.cells);
    const [inputRows, setRows] = useState(grid.rows);

    const handleGridSize = () => {
        const res = {
            cells: parseInt(inputCells),
            rows: parseInt(inputRows),
        };
        setGrid({...res});
    };

    return (
        <View style={sampleStyles.container}>
            <View style={styles.gridStyle}>
                <Grid 
                grid={grid}
                handleGridSize={handleGridSize}
                inputCells={inputCells}
                setCells={setCells}
                setRows={setRows}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    gridStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ParkingSpaceScreen;
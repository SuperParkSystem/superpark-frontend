import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import sampleStyles from '../constants/SampleStyles';

const RealTimeScreen = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        data: [20, 45, 28, 80]
      }
    ]
  };

  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
  };

  return (
    <View style={sampleStyles.container}>
        <Text style={sampleStyles.labelText}>Traffic of Parking Lots</Text>

        <View>
            <BarChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                verticalLabelRotation={30}
            />
        </View>
    </View>
    
  );
};

export default RealTimeScreen;

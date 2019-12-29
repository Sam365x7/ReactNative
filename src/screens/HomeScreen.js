import React from 'react';
import { Text, StyleSheet,View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = props => {
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button 
      onPress={() => props.navigation.navigate('Compo')}
    title="ComponentsScreen">
    </Button>

    <Button 
      onPress={() => props.navigation.navigate('Exercise')}
    title="ExerciseDemo">
    </Button>
    <TouchableOpacity onPress={() => props.navigation.navigate('List') }>
      <Text>
        Go to ListDemo
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate('Image') }>
      <Text>
        Go to ImageDemo
      </Text>
    </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

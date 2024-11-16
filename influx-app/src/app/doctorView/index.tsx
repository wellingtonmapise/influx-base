import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter();

  // Function to navigate to the Patient List
  const navigateToPatientsList = () => {
    router.push('/(tabs)')
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToPatientsList}>
        <Text style={styles.heading}>Doctor View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 32,
    marginBottom: 20,
    color: 'blue', // Indicates that it's clickable
  },
});

export default LoginScreen;

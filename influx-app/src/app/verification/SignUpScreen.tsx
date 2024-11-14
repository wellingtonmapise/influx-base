import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import TextBox from '../../components/login/TextBox'

const SignUpScreen = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/patientView');
  };

  const handleBack = () => {
    router.push('..');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SignUp</Text>
      <Button title="SignUp" onPress={handleLogin} />
      <Button title="Back" onPress={handleBack} />
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
  },
});

export default SignUpScreen;

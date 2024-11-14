// screens/login/index.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/verification/LoginScreen');
  };

  const handleSignUp = () => {
    router.push('/verification/SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={handleLogin} />
      <Button title="SignUp" onPress={handleSignUp} />
      <Link href="/patientView">Navigate to PatientView</Link>
      <Link href="/doctorView">Navigate to DoctorView</Link>
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

export default LoginScreen;

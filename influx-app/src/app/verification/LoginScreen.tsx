import React, { useState } from 'react';
import { View, Alert, Button, StyleSheet } from 'react-native';
import TextBox from '../../components/login/TextBox'
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // INSERT LOGIN-CHECK FUNCTIONALITY HERE
    Alert.alert('Login', `Username: ${username}\nPassword: ${password}`);
  };

  const handleBack = () => {
    router.push('..');
  };


  return (
    <View style={styles.container}>
      <TextBox
        value={username}
        onChangeText={setUsername}
        placeholder="Insert username here"
      />
      <TextBox
        value={password}
        onChangeText={setPassword}
        placeholder="Insert password here"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Back" onPress={handleBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default LoginScreen;

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome To</Text>
      <Text style={styles.subtitle}>Create an account and access thousand{'\n'}of cool stuffs</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>      <Text style={styles.footerText}>
        Do you have an account? <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Log In</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { width: 100, height: 100, marginBottom: 30, borderRadius: 50, overflow: 'hidden' },
  title: { fontSize: 24, fontWeight: '600', color: '#003366' },
  subtitle: { fontSize: 14, color: '#333', textAlign: 'center', marginVertical: 15 },
  button: {
    backgroundColor: '#003366',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontSize: 16 },
  footerText: { marginTop: 25, color: '#666' },
  link: { color: '#003366', fontWeight: 'bold' },
});

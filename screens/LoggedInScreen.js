import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LoggedInScreen({ navigation, route }) {
  const { email } = route.params || { email: 'user' };
  
  return (
    <View style={styles.container}>
      <Icon name="checkmark-circle" size={100} color="#4CAF50" style={styles.icon} />
      <Text style={styles.title}>Successfully Logged In!</Text>
      <Text style={styles.subtitle}>Welcome back, {email}</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your Account</Text>
        <View style={styles.cardRow}>
          <Icon name="person-outline" size={20} color="#003366" />
          <Text style={styles.cardText}>{email}</Text>
        </View>
        <View style={styles.cardRow}>
          <Icon name="calendar-outline" size={20} color="#003366" />
          <Text style={styles.cardText}>Account created: June 18, 2025</Text>
        </View>
      </View>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Welcome')}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#003366',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#003366',
    marginBottom: 15,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#444',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#003366',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 20,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});

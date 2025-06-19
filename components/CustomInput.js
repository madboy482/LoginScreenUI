import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Explicitly load font to prevent icon issues
Icon.loadFont();

export default function CustomInput({ 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry,
  iconName,
  keyboardType,
  onIconPress, 
  toggleIcon,
  style
}) {
  return (
    <View style={[styles.inputContainer, style]}>
      {iconName && (
        <Icon name={iconName} size={20} color="#888" style={styles.icon} />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType || 'default'}
        autoCapitalize="none"
      />
      {toggleIcon && (
        <TouchableOpacity onPress={onIconPress} style={styles.toggleButton}>
          <Icon name={toggleIcon} size={20} color="#666" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginVertical: 8,
    height: 55,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 8,
  },
  toggleButton: {
    padding: 8,
  }
});

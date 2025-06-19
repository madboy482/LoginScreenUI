import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
import { KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomInput from '../components/CustomInput';

// Explicitly load font to prevent icon issues
Icon.loadFont();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const validateEmail = (email) => {
    // Simplify email validation to just check for @ symbol presence
    return email.includes('@');
  };

  const handleLogin = () => {
    // Reset previous errors
    setEmailError('');
    setPasswordError('');
    
    // Validate inputs
    let isValid = true;
    
    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;    } else if (!email.includes('@')) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }
    
    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    }
    
    if (!isValid) return;
    
    // Show loading indicator
    setLoading(true);    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      
      // Super simple check: just make sure email contains @ and password is not empty
      const isValidEmail = email.includes('@');
      const isValidPassword = password.length > 0;
      
      if (isValidEmail && isValidPassword) {
        // Navigate to LoggedIn screen on successful authentication
        navigation.navigate('LoggedIn', { email: email });
      } else {
        let message = '';
        if (!isValidEmail) message = 'Please enter a valid email.';
        else if (!isValidPassword) message = 'Password cannot be empty.';
        else message = 'Invalid email or password.';
        
        Alert.alert('Login Failed', message + ' Please try again.');
      }
    }, 1500);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow-back" size={24} color="#003366" />
            </TouchableOpacity>
            
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Log In Now</Text>
            <Text style={styles.subtitle}>Please login to continue using our app</Text>

            <CustomInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (emailError) setEmailError('');
              }}
              keyboardType="email-address"
              iconName="mail-outline"
              style={emailError ? styles.inputError : {}}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

            <CustomInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (passwordError) setPasswordError('');
              }}
              secureTextEntry={secureText}
              iconName="lock-closed-outline"
              toggleIcon={secureText ? 'eye-outline' : 'eye-off-outline'}
              onIconPress={() => setSecureText(!secureText)}
              style={[passwordError ? styles.inputError : {}, { marginTop: 5 }]}
            />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

            <TouchableOpacity style={styles.forgotButton}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.button} 
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={styles.buttonText}>Log In</Text>
              )}
            </TouchableOpacity>

            <View style={styles.divider}>
              <View style={styles.line} />
              <Text style={styles.dividerText}>or continue with</Text>
              <View style={styles.line} />
            </View>            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <Icon name="logo-google" size={22} color="#DB4437" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Icon name="logo-facebook" size={22} color="#4267B2" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Icon name="logo-apple" size={22} color="#000" />
              </TouchableOpacity>
            </View>

            <Text style={styles.footerText}>
              Don't have an account? <Text style={styles.link}>Sign Up</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: { 
    flex: 1, 
    padding: 24,
    backgroundColor: '#f9f9f9',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    padding: 8,
  },  logo: { 
    width: 80, 
    height: 80, 
    alignSelf: 'center', 
    marginTop: 80,
    marginBottom: 30,
    borderRadius: 40, // Make logo circular by setting borderRadius to half of width/height
    overflow: 'hidden' // Ensure the image respects the rounded borders
  },
  title: { 
    fontSize: 24, 
    fontWeight: '700', 
    color: '#003366', 
    textAlign: 'center' 
  },
  subtitle: { 
    fontSize: 15, 
    color: '#666', 
    textAlign: 'center', 
    marginBottom: 30 
  },
  inputError: {
    borderColor: '#FF6B6B',
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: 12,
    marginLeft: 10,
    marginTop: 2,
    marginBottom: 5,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginBottom: 25,
  },
  forgotText: {
    color: '#003366',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#003366',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '600' 
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    paddingHorizontal: 15,
    color: '#999',
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  link: { 
    color: '#003366', 
    fontWeight: 'bold' 
  },
  footerText: { 
    marginTop: 20, 
    color: '#666', 
    textAlign: 'center' 
  },
});

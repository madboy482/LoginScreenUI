import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// This helps ensure vector icons are correctly loaded on Android
export const iconInit = () => {
  if (Platform.OS === 'android') {
    // Load font for Android
    try {
      Icon.loadFont();
    } catch (error) {
      // Font might already be loaded, ignore error
      console.log('Icons already loaded or failed to load:', error);
    }
  }
};

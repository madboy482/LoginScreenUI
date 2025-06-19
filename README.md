# Login Screen UI - React Native Assignment

A beautifully designed login screen UI with navigation flow between welcome screen, login screen, and a logged-in screen.

## Features

- Modern and clean UI design
- Welcome screen with navigation to login
- Login screen with email and password validation
- Show/hide password functionality
- Simple email validation (checks for @ symbol)
- Custom Input component for consistent styling
- Logged In screen showing successful authentication
- Social login buttons UI
- Keyboard avoiding behavior
- Error handling and validation
- Loading state during login process

## Login Instructions

This application allows you to log in with:
- Any email address that contains the "@" symbol (e.g., `user@example.com`)
- Any non-empty password

No predefined credentials are needed - simply enter a valid email format and any password to access the logged-in screen.

## Project Structure

- `App.js` - Main app component with React Navigation setup
- `screens/` - All app screens
  - `WelcomeScreen.js` - Initial welcome screen
  - `LoginScreen.js` - Login screen with validation
  - `LoggedInScreen.js` - Success screen after successful login
- `components/` - Reusable components
  - `CustomInput.js` - Custom text input component
  - `IconsHelper.js` - Helper for loading vector icons
- `assets/` - Images and data files
  - `logo.png` - App logo image
- `api-integration.json` - JSON schema for backend API integration
- `api-service.js` - Sample implementation of API service functions

## Technologies Used

- React Native
- React Navigation
- React Native Vector Icons
- JavaScript ES6+

# Setup Instructions

## Prerequisites

Before you begin, make sure you have the following installed:

1. [Node.js](https://nodejs.org/) (v16 or newer)
2. [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)
3. [React Native CLI](https://reactnative.dev/docs/environment-setup)
4. Android Studio (for Android development)
5. Xcode (for iOS development, macOS only)

## Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/madboy482/LoginScreenUI.git
   cd LoginScreenUI
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Install iOS dependencies (macOS only):
   ```bash
   cd ios
   pod install
   cd ..
   ```

# Running the App

## Step 1: Start Metro Server

First, start the Metro bundler:

```bash
npm start
# or
yarn start
```

## Step 2: Run on a Device or Emulator

In a separate terminal window:

### For Android:

```bash
npm run android
# or
yarn android
```

### For iOS (macOS only):

```bash
npm run ios
# or
yarn ios
```

# Troubleshooting

## Icon Issues on Android

If icons appear as Chinese characters or boxes on Android:

1. Clean the Android build:
   ```bash
   cd android && ./gradlew clean
   cd ..
   ```

2. Rebuild the app:
   ```bash
   npm run android
   ```

## Navigation Issues

If you encounter navigation problems:

1. Check that all required packages are installed:
   ```bash
   npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
   ```

2. Clear the cache:
   ```bash
   npm start -- --reset-cache
   ```

## General Issues

1. If you encounter any build errors, try cleaning the project:
   ```bash
   # For iOS (macOS only)
   cd ios && pod deintegrate && pod install && cd ..
   
   # For Android
   cd android && ./gradlew clean && cd ..
   ```

2. Verify that your environment is set up correctly according to the [React Native documentation](https://reactnative.dev/docs/environment-setup).

# Contributing

Feel free to submit pull requests or create issues for any bugs or feature requests.

# License

This project is open source and available under the [MIT License](LICENSE).

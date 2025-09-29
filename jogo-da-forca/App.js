import React from 'react';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import Forca from './src/Forca/forca';

export default function App() {
  /// Lucas Araujo dos Santos
  /// EC10
  /// 081210009
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#F7F7FB' }} // garante flex:1
      behavior={Platform.OS === "ios" ? "padding" : undefined} // melhor no Android sem 'height'
    >
      <StatusBar barStyle="dark-content" />
      <Forca />
    </KeyboardAvoidingView>
  );
}

import { StatusBar } from 'expo-status-bar';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Main from './src/components/Main';
import Flex from './src/components/Flex';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <Flex style={styles.container}>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

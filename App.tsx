import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ProfileInfo from './components/ProfileInfo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileInfo/>
      <Text>Hellooooo</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
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

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ProfileInfo from './components/ProfileInfo';
import Styles from './components/Styles';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <ProfileInfo onClosed={function (name: string, image: string): void {
        throw new Error('Function not implemented.');
      } }/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

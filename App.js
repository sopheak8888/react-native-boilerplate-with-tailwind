import {SafeAreaView} from 'react-native';
import Screen from './src/screens/index';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white h-full">
      <Screen />
    </SafeAreaView>
  );
}

import {View} from 'react-native';
import Navbar from '../components/Navbar';
import {useScreenStore} from '../stores/screen-store';
import Home from './home';

export default function Screen() {
  const currentScreen = useScreenStore((state) => state.screen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <Home />;
      default:
        return <Home />;
    }
  };

  return (
    <View className="flex-1 bg-white h-full">
      <Navbar />
      {renderScreen()}
    </View>
  );
}

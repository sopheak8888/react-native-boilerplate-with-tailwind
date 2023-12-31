import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import Home from './src/screens/home';
import Setting from './src/screens/setting';
import RegisterButton from './src/components/headers/home/registerButton';

const Tab = createBottomTabNavigator();

const screens = {
  Home: {
    component: Home,
    options: {
      tabBarBadge: 3,
      headerRight: () => (
        <RegisterButton />
      ),
    },
    icons: {
      focused: 'home',
      default: 'home-outline',
    },
  },
  Settings: {
    component: Setting,
    icons: {
      focused: 'settings',
      default: 'settings-outline',
    },
  },
};

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white h-full">
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              const iconName = focused ? screens[route.name].icons.focused : screens[route.name].icons.default;
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          })}
        >
          {Object.entries(screens).map(([name, {component, options}]) => (
            <Tab.Screen key={name} name={name} component={component} options={options} />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

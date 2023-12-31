import {Button, SafeAreaView, StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import Home from './src/screens/home';
import Setting from './src/screens/setting';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white h-full">
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ?
                'home' :
                'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home} options={{
            tabBarBadge: 3,
            headerRight: () => (
              <View className="mr-2">
                <Button
                  onPress={() => { /* Do something when button is pressed */ }}
                  title="Register"
                  color="#000"
                />
              </View>
            ),
          }} />
          <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

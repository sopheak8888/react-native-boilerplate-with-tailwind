import {Image, Text, View} from 'react-native';

export default function Navbar() {
  return (
    <View className="h-12 mt-[25px] w-full flex flex-row justify-between items-center p-2 bg-blue-300">
      <Text className="font-bold text-sm">My App</Text>
      <View className="flex flex-row items-center">
        <Image
          className="w-6 h-6"
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/instagram-ui-twotone/48/Paul-18-512.png',
          }}
        />
      </View>
    </View>
  );
}

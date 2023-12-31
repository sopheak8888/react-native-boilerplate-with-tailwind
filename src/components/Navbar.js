import {Image, Text, View} from 'react-native';

export default function Navbar() {
  return (
    <View className="h-12 w-full flex flex-row justify-between items-center p-2 bg-blue-300">
      <Text className="text-xl font-extrabold">John App</Text>
      <View className="flex flex-row items-center bg-slate-600 rounded-full">
        <Image
          className="w-8 h-8"
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/instagram-ui-twotone/48/Paul-18-512.png',
          }}
        />
      </View>
    </View>
  );
}

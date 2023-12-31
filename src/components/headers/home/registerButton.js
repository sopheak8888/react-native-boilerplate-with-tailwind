import {Button, View} from 'react-native';

export default function RegisterButton() {
  return (
    <View className="mr-2">
      <Button
        onPress={() => {/* Do something when button is pressed */}}
        title="Register"
        color="#000"
      />
    </View>
  );
}

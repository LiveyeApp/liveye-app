import { View, Text ,StatusBar} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
  return (
    <SafeAreaView   className= "flex-1 justify-center items-center">
    <View className="  bg-blue-500">
   < Text className={"text-red-600 "}>Hello NativeWind!</Text>
    </View>

   </SafeAreaView>

  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
// //

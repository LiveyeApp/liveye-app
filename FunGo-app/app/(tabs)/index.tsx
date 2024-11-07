import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


export default function Home() {
    return (
        // <SafeAreaView   className= "flex-1 justify-center items-center">
        <View className="bg-blue-500">
            <Text className={"text-red-600 "}>Hello NativeWind!</Text>
        </View>

        //    </SafeAreaView>
    );
}

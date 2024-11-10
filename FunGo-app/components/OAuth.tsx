import { router } from "expo-router";
import { Alert, Image, Text, View } from "react-native";
import { googleOAuth } from "@/lib/auth";
import CustomButton from "@/components/CustomButton";
import { icons } from "@/components/constants";

const OAuth = () => {
//   const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const handleGoogleSignIn = async () => {

    // const result = await googleOAuth(startOAuthFlow);

    // if (result.code === "session_exists") {
    //   Alert.alert("Success", "Session exists. Redirecting to home screen.");
    //   router.replace("/(root)/(tabs)/home");
    // }

    Alert.alert("Success" );
  };

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>

      <CustomButton
        title="Log In with Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;

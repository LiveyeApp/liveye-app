import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="sign-up/index" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in/index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;

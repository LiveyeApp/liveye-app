import { Link, router } from 'expo-router'
import React, { useCallback, useState } from 'react'
import { Alert, Image, ScrollView, Text, View } from 'react-native'
import OAuth from '@/components/OAuth'
import CustomButton from '@/components/CustomButton'
import InputField from '@/components/InputField'
import { icons, images } from '@/components/constants'
import LoginBtn from '@/components/LoginBtn'

export default function SignIn() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          {/* <Image source={images.signUpCar} className="z-0 w-full h-[250px]" /> */}
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign In"
            // onPress={onSignInPress}
            className="mt-6"
          />

          {/* <OAuth /> */}
          <LoginBtn type="google" loginWith={() => {}} />
          <LoginBtn type="facebook" loginWith={() => {}} />
          <LoginBtn type="apple" loginWith={() => {}} />

          <Link
            href="/(auth)/(sign-up)"
            className="text-lg text-center text-general-200 mt-10"
          >
            Don't have an account?{' '}
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  )
}

import React from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'

type LoginType = 'apple' | 'google' | 'facebook'

interface LoginBtnProps {
  type: LoginType
  loginWith: (type: LoginType) => void
}

const LoginBtn: React.FC<LoginBtnProps> = ({ type, loginWith }) => {
  const bgColor = {
    apple: 'bg-black',
    google: 'bg-white',
    facebook: 'bg-facebook',
  }[type]

  const textColor = type === 'google' ? 'text-black' : 'text-white'

  const imageMap = {
    apple: require('../assets/icons/apple.png'),
    google: require('../assets/icons/google.png'),
    facebook: require('../assets/icons/facebook.png'),
  }

  const handlePress = () => {
    console.log(`Login with ${type}`)
    loginWith(type)
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`flex-row  justify-between items-center border border-black px-6 py-3 mt-4 rounded-full w-full ${bgColor}`}
    >
      <Image source={imageMap[type]} style={{ width: 24, height: 24 }} />
      <View>
        <Text className={`${textColor} text-base`}>
          {`Continue with ${type.charAt(0).toUpperCase() + type.slice(1)}`}
        </Text>
      </View>
      <View style={{ width: 24, height: 24 }}></View>
    </TouchableOpacity>
  )
}

export default LoginBtn

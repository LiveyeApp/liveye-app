import { Stack } from "expo-router";
import { useState } from 'react';
import CustomButton from "@/components/CustomButton";
import { useNavigation } from '@react-navigation/native';
import { Alert, Image, ScrollView, Text, View ,TouchableOpacity} from "react-native";
import { ReactNode } from 'react';
import React from "react";


function SignUpLayout({ children }: { children: ReactNode }) {
    const [currentStep, setCurrentStep] = useState(1); // לשמור את שלב ההרשמה הנוכחי
    const navigation = useNavigation();

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            // ניווט חזרה למסך הקודם
            navigation.goBack() ;         }
    };

    return (
<>
  <CustomButton  onLayout={handleBack} className="mb-4" title={'< Back'}></CustomButton>

         <Stack>


            <Stack.Screen name="index" options={{ headerShown: false }} />


     </Stack>
     </>
    );
}

export default SignUpLayout;

import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { ReactNativeModal } from "react-native-modal";
import Swiper from "react-native-swiper";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/components/constants";

export default function SignUp() {
    const [currentStep, setCurrentStep] = useState(0);
    const [scrollEnabled, setScrollEnabled] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [verification, setVerification] = useState({state: "default", error: "",code: "",});

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white flex-1 ">
            <View className="flex-grow-0 justify-center">
                {/* title */}
                <View className="relative w-full h-[250px]">
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Create Your Account
                    </Text>
                </View>

                {/*User Content*/}
                <View className="flex-auto p-5">
                    <Swiper
                        index={currentStep}
                        scrollEnabled={scrollEnabled}
                        loop={false}
                        showsPagination={true}
                        onIndexChanged={(index) => {
                            setCurrentStep(index);
                            setScrollEnabled(false);
                        }}
                    >

                        <ScrollView className="flex-2 bg-white p-5">
                            <InputField
                                label="Name"
                                placeholder="Enter name"
                                icon={icons.person}
                                value={form.name}
                                onChangeText={(value) => setForm({ ...form, name: value })}
                            />
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
                            <CustomButton title="Sign Up" className="mt-4" />
                        </ScrollView>
                    </Swiper>

                    {/*The OAuth component and the login */}
                        <OAuth />

                    <Link
                        href="/sign-in"
                        className="text-lg text-center text-general-200 mt-5"
                    >
                        Already have an account?{" "}
                        <Text className="text-primary-500">Log In</Text>
                    </Link>
                </View>

                {/*Validation model*/}
                <ReactNativeModal
                    isVisible={verification.state === "pending"}
                    onModalHide={() => {
                        if (verification.state === "success") {
                            setShowSuccessModal(true);
                        }
                    }}
                >
                    <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
                        <Text className="font-JakartaExtraBold text-2xl mb-2">Verification</Text>
                        <Text className="font-Jakarta mb-5">
                            We've sent a verification code to {form.email}.
                        </Text>
                        <InputField
                            label={"Code"}
                            icon={icons.lock}
                            placeholder={"12345"}
                            value={verification.code}
                            keyboardType="numeric"
                            onChangeText={(code) =>
                                setVerification({ ...verification, code })
                            }
                        />
                        {verification.error && (
                            <Text className="text-red-500 text-sm mt-1">
                                {verification.error}
                            </Text>
                        )}
                        <CustomButton
                            title="Verify Email"
                            className="mt-5 bg-success-500"
                        />
                    </View>
                </ReactNativeModal>

                {/*Success model*/}
                <ReactNativeModal isVisible={showSuccessModal}>
                    <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
                        <Image
                            source={images.check}
                            className="w-[110px] h-[110px] mx-auto my-5"
                        />
                        <Text className="text-3xl font-JakartaBold text-center">Verified</Text>
                        <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
                            You have successfully verified your account.
                        </Text>
                        <CustomButton
                            title="Browse Home"
                            className="mt-5"
                        />
                    </View>
                </ReactNativeModal>
            </View>
        </ScrollView>
    );
};

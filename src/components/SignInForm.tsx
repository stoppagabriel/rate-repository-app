import { Formik } from "formik";
import Flex from "./Flex";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import React, { useState } from "react";
import * as yup from 'yup';
import { Credentials, useSignIn } from "../hooks/useSignIn";
import AuthStorage from "../utils/authStorage";
import { useNavigate } from "react-router-native";

const initialValues = {
    username: '',
    password: '',
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: theme.colors.mainBg,
    },
    formWrapper: {
        backgroundColor: theme.colors.textLight,
    },
    submitButton: { 
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        padding: theme.gap.m,
        margin: theme.gap.s,
        borderRadius: theme.gap.xs
    },
    submitButtonText: {
        textAlign: 'center',
        color: theme.colors.textLight
    }
})

const SignInForm = ({ onSubmit }: { onSubmit: Function }) => {
    const [error, setError] = useState(false);

    const onError = () => {
        Alert.alert('Error', 'Username or password is invalid');
    }

    return (
        <Flex direction={'col'} style={styles.formContainer}>
            <View style={styles.formWrapper}>
                <FormikTextInput name={'username'} placeholder={'Username'} setError={setError}/>
                <FormikTextInput name={'password'} placeholder={'Password'} setError={setError} secureTextEntry />
                <Pressable style={styles.submitButton} onPress={error? onError as any : onSubmit as any}>
                    <Text style={styles.submitButtonText}>Sign In</Text>
                </Pressable>
            </View>
        </Flex>
    )
}
const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
})

const SignInWrapper = () => {
    const [signIn] = useSignIn() as any;
    const navigate = useNavigate();

    const onSubmit = async (credentials: Credentials) => {
        try {
            await signIn(credentials);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

export default SignInWrapper;
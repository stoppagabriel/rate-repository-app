import { useField } from "formik";
import TextInput from "./NativeTextInput";
import { StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { useEffect } from "react";

const styles = StyleSheet.create({
    errorText: {
      marginTop: theme.gap.base,
      marginLeft: theme.gap.s,
      color: theme.colors.error
    },
  });

const FormikTextInput = ({ name, setError, ...props }) => {
    const [field, meta, helper] = useField(name);
    const showError = meta.touched && meta.error;

    useEffect(() => {
        if(showError) setError(true);
        else setError(false);
    }, [showError])

    return (
        <>
            <TextInput 
                onChangeText={(text: string) => helper.setValue(text)}
                onBlur={() => helper.setTouched(true)}
                value={field.value}
                error={showError}
                { ...props }
            />
            { showError && <Text style={styles.errorText}>{ meta.error }</Text> }
        </>
    )
}

export default FormikTextInput;
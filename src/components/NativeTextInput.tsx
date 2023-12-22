import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    input: {
        padding: theme.gap.s,
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    inputError: {
        borderColor: theme.colors.error
    }
});

export const TextInput = (props: any) => {
    return (    
        <NativeTextInput style={[styles.input, props.error && styles.inputError]} {...props}/>
    )
}

export default TextInput;
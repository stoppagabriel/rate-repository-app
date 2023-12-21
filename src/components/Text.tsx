import { Dimensions, Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    text: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSizes.body,
      fontFamily: theme.fonts.main,
      fontWeight: theme.fontWeights.normal as any,
    },
    colorTextSecondary: {
      color: theme.colors.textSecondary,
    },
    colorPrimary: {
      color: theme.colors.primary,
    },
    colorTextLight: {
        color: theme.colors.textLight,
    },
    fontSizeSubheading: {
      fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
      fontWeight: theme.fontWeights.bold as any,
    },
  });

const Text = ({
    color,
    fontSize,
    fontWeight,
    style,
    ...props
}: {
    color?: 'textSecondary' | 'primary' | 'textLight';
    fontSize?: 'subheading';
    fontWeight?: 'bold';
    style?: any;
    children?: any;
}) => {
    const textStyles = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        color === 'textLight' && styles.colorTextLight,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        style
    ];

    return <NativeText style={textStyles} {...props} />
}

export default Text;
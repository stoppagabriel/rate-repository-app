import theme from "../theme";
import Text from "./Text";

const styles = {
    tagContainer: {
        backgroundColor: theme.colors.primary, 
        color: theme.colors.textLight,
        padding: 5,
        borderRadius: 5,
        flexGrow: 0,
        flexShrink: 1
    }
}

type TagProps = {
    children?: any,
    style?: any
}
const Tag = ({
    style,
    children,
    ...props
}: TagProps) => {
    return (
        <Text style={[styles.tagContainer, style]} { ...props }>
            { children }
        </Text>
    )
}

export default Tag;
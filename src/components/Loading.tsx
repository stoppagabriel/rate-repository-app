import theme from "../theme"
import Flex from "./Flex"
import Text from "./Text"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    loadingContainer: {
        padding: theme.gap.s
    }
})
const Loading = () => {
    return (
        <Flex style={styles.loadingContainer}>
            <Text>Loading...</Text>
        </Flex>
    )
}

export default Loading;
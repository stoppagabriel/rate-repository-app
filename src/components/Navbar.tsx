import Flex from "./Flex"
import { Pressable, StatusBar, StyleSheet } from "react-native"
import Text from "./Text"
import theme from "../theme"
import { NavbarTab } from "./NavbarTab"

const styles = StyleSheet.create({
    navbarContainer: {
        padding: 10,
        paddingTop: StatusBar.currentHeight + 20,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        color: 'red',
        backgroundColor: theme.colors.navBar
    }
})
export const Navbar = () => {
    return (
        <Flex style={styles.navbarContainer} gap={10}>
            <NavbarTab>
                Repositories
            </NavbarTab>
        </Flex>
    )
}
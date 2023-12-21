import Flex from "./Flex"
import { StatusBar, StyleSheet } from "react-native"
import theme from "../theme"
import { NavbarTab } from "./NavbarTab"

const styles = StyleSheet.create({
    navbarContainer: {
        padding: 10,
        paddingTop: StatusBar.currentHeight + 20,
        borderBottomColor: theme.colors.mainBg,
        borderBottomWidth: 3,
        backgroundColor: theme.colors.navBar
    }
})
export const Navbar = () => {
    return (
        <Flex style={styles.navbarContainer} gap={theme.gap.s}>
            <NavbarTab>
                Repositories
            </NavbarTab>
        </Flex>
    )
}
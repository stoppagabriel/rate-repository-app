import Flex from "./Flex"
import { ScrollView, StatusBar, StyleSheet, View } from "react-native"
import theme from "../theme"
import { NavbarTab } from "./NavbarTab"

const styles = StyleSheet.create({
    scrollContainer: {
        padding: 10,
        paddingTop: StatusBar.currentHeight + 20,
        backgroundColor: theme.colors.navBar
    },
    navbarContainer: {
        flex: 0
    }
})
export const Navbar = () => {
    return (
        <View>
            <Flex style={styles.navbarContainer}>
                <ScrollView horizontal style={styles.scrollContainer}>
                    <NavbarTab link='/'>
                        Repositories
                    </NavbarTab>
                    <NavbarTab link="/sign">
                        Sign in
                    </NavbarTab>
                </ScrollView>
            </Flex>
        </View>
    )
}
import Flex from "../Flex"
import { ScrollView, StatusBar, StyleSheet, View } from "react-native"
import theme from "../../theme"
import { NavbarTab } from "./NavbarTab"
import { GET_LOGGED_IN_USER } from "../../graphql/queries"
import { useApolloClient, useQuery } from "@apollo/client"
import useAuthStorage from "../../hooks/useAuthStorage"

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
    const { data } = useQuery(GET_LOGGED_IN_USER);
    const authStorageContext = useAuthStorage();
    const apolloClient = useApolloClient();

    const isUserLoggedIn = Boolean(data?.me);

    const signOut = async () => {
        await authStorageContext.removeAccessToken();
        await apolloClient.resetStore();

    }

    const renderSignTab = () => {
        if(isUserLoggedIn) {
            return (
                <NavbarTab onPress={signOut}>
                    Sign Out
                </NavbarTab>
            )
        }

        return (
            <NavbarTab link="/sign">
                Sign in
            </NavbarTab>
        )
    }
    
    return (
        <View>
            <Flex style={styles.navbarContainer}>
                <ScrollView horizontal style={styles.scrollContainer}>
                    <NavbarTab link='/'>
                        Repositories
                    </NavbarTab>
                    { renderSignTab() }
                </ScrollView>
            </Flex>
        </View>
    )
}
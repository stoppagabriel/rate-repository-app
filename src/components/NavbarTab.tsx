import Text from "./Text";
import { StyleSheet } from "react-native";
import { Link } from "react-router-native";
import theme from "../theme";

const styles = StyleSheet.create({
    itemContainer: {
        marginRight: theme.gap.s,
    }
})

type NavbarTabProps = {
    children?: any
    link?: string;
}

export const NavbarTab = ({
    children,
    link = '/',
    ...props
}: NavbarTabProps) => {
    return (
        <Link to={link} style={styles.itemContainer}>
            <Text color={'textLight'} { ...props }>{ children }</Text>
        </Link>
    )
}
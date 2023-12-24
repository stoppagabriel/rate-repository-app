import Text from "../Text";
import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import theme from "../../theme";

const styles = StyleSheet.create({
    itemContainer: {
        marginRight: theme.gap.s,
    }
})

type NavbarTabProps = {
    children?: any;
    link?: string;
    [key: string]: any;
}

export const NavbarTab = ({
    children,
    link,
    ...props
}: NavbarTabProps) => {

    const getTabContent = () => {
        if(link) {
            return (
                <Link to={link} style={styles.itemContainer}>
                    <Text color={'textLight'} { ...props }>{ children }</Text>
                </Link>
            )
        }

        return (
            <Pressable { ...props }>
                 <Text color={'textLight'}>{ children }</Text>
            </Pressable> 
        )
    }
    return getTabContent();
}
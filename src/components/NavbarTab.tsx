import { Pressable } from "react-native";
import Text from "./Text";

type NavbarTabProps = {
    children?: any
}

export const NavbarTab = ({
    children,
    ...props
}: NavbarTabProps) => {
    return (
        <Pressable>
            <Text color={'textLight'} { ...props }>{ children }</Text>
        </Pressable>
    )
}
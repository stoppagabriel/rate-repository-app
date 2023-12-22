import { StyleSheet, View } from "react-native";

type FlexProps = {
    direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse',
    gap?: number,
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around',
    align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline',
    children?: any,
    shrink?: number,
    wrap?: boolean,
    style?: any
}
const Flex = ({
    children,
    direction = 'row',
    gap = 0,
    justify = 'flex-start',
    align = 'stretch',
    wrap = false,
    shrink = 0,
    style,
    ...props
}: FlexProps) => {
    const internalStyles = StyleSheet.create({ 
        display: 'flex' as any,
        flexDirection: direction as any === 'col' ? 'column' : direction as any,
        gap: gap as any,
        justifyContent: justify as any,
        alignItems: align as any,
        flexWrap: (wrap? 'wrap' : 'nowrap') as any,
        flexShrink: shrink as any,
        flexGrow: 1 as any
     })

    return (
        <View style={[internalStyles, style]} { ...props }>
            { children }
        </View>
    )
}

export default Flex;
import theme from "../../theme";
import Flex from "../Flex";
import Text from "../Text";

const shortenValue = (value: number): string => {
    if(value >= 1000) {
        return `${(value / 1000).toFixed(1)}k`
    }

    return value.toString();
}

type RepoStatisticProps = {
    name: string,
    value: number,
    shouldShortenValue?: boolean
}
export const RepoStatistic = (
    { name, value, shouldShortenValue = false }: RepoStatisticProps  
) => {
    const valueToBeDisplayed = shouldShortenValue ? shortenValue(value) : value.toString();

    return (
        <Flex direction={'col'} align={'center'} gap={theme.gap.base}>
            <Text fontWeight={'bold'}>{ valueToBeDisplayed }</Text>
            <Text>{ name }</Text>
        </Flex>
    )
}
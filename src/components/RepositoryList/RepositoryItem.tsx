import { Image, StyleSheet } from "react-native"
import { Repository } from "../../types/_types";
import Flex from "../Flex";
import Text from "../Text";
import theme from "../../theme";
import Tag from "../Tag";
import { RepoStatistic } from "./RepoStatistic";

const styles = StyleSheet.create({
    avatarImage: {
        width: 40, 
        height: 40
    },
    itemContainer: {
        padding: 20,
        backgroundColor: theme.colors.textLight,
    },
    topTextContainer: {
        flex: 1,
    },
})
const RepositoryItem = ({ item }: { item: Repository }) => {
    return (
        <Flex gap={theme.gap.m} direction={'col'} style={styles.itemContainer}>
            <Flex gap={theme.gap.s} align="flex-start" >
                <Image style={styles.avatarImage} source={ { uri: item.ownerAvatarUrl }}  />
                <Flex direction={'col'} align="flex-start" gap={theme.gap.xs} style={styles.topTextContainer}>
                        <Text fontWeight={'bold'}>{ item.fullName }</Text>
                        <Text>{ item.description }</Text>
                        <Tag>{ item.language }</Tag>
                </Flex>                
            </Flex>
            <Flex gap={theme.gap.s} justify={'space-around'}>
                <RepoStatistic name={'Stars'} value={item.stargazersCount} shouldShortenValue={true}/>
                <RepoStatistic name={'Forks'} value={item.forksCount} shouldShortenValue={true}/>
                <RepoStatistic name={'Reviews'} value={item.reviewCount} />
                <RepoStatistic name={'Rating'} value={item.ratingAverage} />
            </Flex>
        </Flex>
    )
}

export default RepositoryItem;
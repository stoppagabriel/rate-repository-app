import { View, Image, StyleSheet } from "react-native"
import { Repository } from "../types/_types";
import Flex from "./Flex";
import Text from "./Text";
import theme from "../theme";
import Tag from "./Tag";

const styles = StyleSheet.create({
    avatarImage: {
        width: 40, 
        height: 40
    },
    itemContainer: {
        padding: 20,
        backgroundColor: theme.colors.textLight
    }
})
const RepositoryItem = ({ item }: { item: Repository }) => {
    return (
        <Flex gap={theme.gap.m} direction={'col'} style={styles.itemContainer}>
            <Flex gap={theme.gap.s} align="flex-start">
                <Image style={styles.avatarImage} source={ { uri: item.ownerAvatarUrl }}  />
                <Flex direction={'col'} align="flex-start" gap={theme.gap.xs}>
                        <Text fontWeight={'bold'}>{ item.fullName }</Text>
                        <Text>{ item.description }</Text>
                        <Tag>{ item.language }</Tag>
                </Flex>                
            </Flex>
            <Flex gap={theme.gap.s} justify={'space-around'}>
                <Flex direction={'col'} align={'center'}>
                    <Text fontWeight={'bold'}>{ item.forksCount }</Text>
                    <Text>Forks</Text>
                </Flex>
                <Flex direction={'col'} align={'center'}>
                    <Text fontWeight={'bold'}>{ item.stargazersCount }</Text>
                    <Text>Stars</Text>
                </Flex>
                <Flex direction={'col'} align={'center'}>
                    <Text fontWeight={'bold'}>{ item.ratingAverage }</Text>
                    <Text>Rating</Text>
                </Flex>
                <Flex direction={'col'} align={'center'}>
                    <Text fontWeight={'bold'}>{ item.reviewCount }</Text>
                    <Text>Reviews</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default RepositoryItem;
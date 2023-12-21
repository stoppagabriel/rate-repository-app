import { View, Image, StyleSheet } from "react-native"
import { Repository } from "../types/_types";
import Flex from "./Flex";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
    avatarImage: {
        width: 50, 
        height: 50
    },
    itemContainer: {
        padding: 10,
        backgroundColor: theme.colors.textLight
    }
})
const RepositoryItem = ({ item }: { item: Repository }) => {
    return (
        <Flex gap={10} direction={'col'} style={styles.itemContainer}>
            <Flex align={'center'} gap={10}>
                <Image style={styles.avatarImage} source={ { uri: item.ownerAvatarUrl }}  />
                <Flex direction={'col'}>
                    <Text>{ item.fullName }</Text>
                    <Text>{ item.description }</Text>
                    <Text>{ item.language }</Text>
                </Flex>
            </Flex>
            <Flex gap={10} justify={'space-around'}>
                <Flex direction={'col'} align={'center'}>
                    <Text>{ item.forksCount }</Text>
                    <Text>Forks</Text>
                </Flex>
                <Flex direction={'col'} align={'center'}>
                    <Text>{ item.stargazersCount }</Text>
                    <Text>Stars</Text>
                </Flex>
                <Flex direction={'col'} align={'center'}>
                    <Text>{ item.ratingAverage }</Text>
                    <Text>Rating</Text>
                </Flex>
                <Flex direction={'col'} align={'center'}>
                    <Text>{ item.reviewCount }</Text>
                    <Text>Reviews</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default RepositoryItem;
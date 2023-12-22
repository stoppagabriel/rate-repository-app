import React from "react";
import { FlatList, StyleSheet, View } from "react-native"
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import Loading from "./Loading";

const styles = StyleSheet.create({
    separator: {
        height: 20,
    },
});

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
    const { repositoriesNodes, loading } = useRepositories()

    return (
        loading 
        ? <Loading />
        : <FlatList
            data={repositoriesNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <RepositoryItem item={item} />}
        />
    )
}

export default RepositoryList;
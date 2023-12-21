import React from "react";
import { FlatList, StyleSheet, View } from "react-native"
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
    separator: {
        height: 20,
    },
});

const ItemSeparator = ()=> <View style={styles.separator} />

const RepositoryList = ({ repositories }) => {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <RepositoryItem item={item} />}
        />
    )
}

export default RepositoryList;
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
    
    const { data, loading } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network' })

    const repositories = data?.repositories;

    const repositoriesNodes = repositories
        ? repositories?.edges?.map((edge) => edge.node)
        : [];

    return { repositoriesNodes, loading };
}

export default useRepositories;
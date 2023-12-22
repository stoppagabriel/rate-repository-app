import { useState, useEffect } from "react";

const useRepositories = () => {
    const [repositories, setRepositories] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchRepositories = async () => {
        try {
            setLoading(true)
            const repositoriesResponse = await fetch('http://10.0.0.37:5000/api/repositories');
            const repositoriesJson = await repositoriesResponse.json();

            setRepositories(repositoriesJson);
        } catch (e) {
            console.error(`e=${e.message}`);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRepositories()
    }, [])

    const repositoriesNodes = repositories
        ? repositories?.edges?.map((edge) => edge.node)
        : [];

    return { repositoriesNodes, loading, refetch: fetchRepositories };
}

export default useRepositories;
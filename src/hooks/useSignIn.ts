import { useApolloClient, useMutation } from "@apollo/client"
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

export type Credentials = {
    username: string,
    password: string
}

export const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE);
    const authStorageContext = useAuthStorage();
    const apolloClient = useApolloClient();

    const signIn = async (credentials : Credentials) => {
        const { data } = await mutate({ variables: { credentials }});
        await authStorageContext.setAccessToken(data.authenticate.accessToken);
        apolloClient.resetStore();
    }

    return [signIn, result]
}
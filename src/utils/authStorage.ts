import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
    namespace: string;

    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    private get identification() {
        return `${this.namespace}:token`;
    }

    async getAccessToken() {
        const token = await AsyncStorage.getItem(this.identification);
        return token || null;
    }

    async setAccessToken(token: string) {
        return await AsyncStorage.setItem(this.identification, token);
    }

    async removeAccessToken() {   
        return await AsyncStorage.removeItem(this.identification);
    }
}

export default AuthStorage;
import axios from "axios";
const url = 'http://34.172.137.39/api/';

class authApi {
    static async getAuthToken(): Promise<string> {
        return new Promise((resolve, reject) => {
            axios.get(url + 'auth')
                .then((res: any) => {
                    let data = res.data;
                    resolve(
                        data
                    );
                })
                .catch((err: any) => {
                    reject(err);
                })
        });
    }
}

export default authApi;
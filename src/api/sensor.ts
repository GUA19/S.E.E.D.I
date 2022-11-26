import axios from "axios";
const url = 'http://34.172.137.39/api/';

class sensorApi {
    static async postCalibrate(): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.post(url + 'sensor_reading/calibrate')
                .then((res: any) => {
                    resolve(res.status);
                })
                .catch((err: any) => {
                    reject(err);
                })
        });
    }
}

export default sensorApi;
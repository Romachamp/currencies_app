import axios from "axios";

class GetInflationService {
    async getInflation(country) {
        const config = {
            headers: {
                'X-Api-Key': '5XVneyxy9YVQ7/wAd6Mkpw==F70jTJkTKe6I19CT'
            }
        }
        const url = `https://api.api-ninjas.com/v1/inflation?country=${country}`;
        return axios.get(url, config);
    }
}

export default new GetInflationService();
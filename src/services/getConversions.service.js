import axios from "axios";

class GetConversionsService {
    async getConversions(have, want, amount){
        const config = {
            headers: {
                'X-Api-Key': '5XVneyxy9YVQ7/wAd6Mkpw==F70jTJkTKe6I19CT'
            }
        }
        const url = `https://api.api-ninjas.com/v1/convertcurrency?have=${have}&want=${want}&amount=${amount}`;
        return axios.get(url, config);
    }
}

export default new GetConversionsService();
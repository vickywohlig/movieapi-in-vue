import axios from "axios";

//axios.defaults.baseURL = "https://anapioficeandfire.com/api/";
export default {
    getcharacter: function() {
        return axios({
                method: "get",
                url: "https://api.coindesk.com/v1/bpi/currentprice.json"
                    // url: "http://api.tvmaze.com/search/shows?q=marvel"
            })
            .then(response => response.data)
            .catch(error => error);
    }
};
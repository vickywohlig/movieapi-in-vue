import axios from "axios";

export default {
    getmovies: function(infoUrl) {
        console.log("movie api", infoUrl);
        return (
            axios
            .get("http://api.tvmaze.com/search/shows?" + "q=" + infoUrl)
            //     return axios({
            //             method: "get",
            //             url: "http://api.tvmaze.com/search/shows?" + "q=" + this.infoUrl
            //         })
            .then(response => response.data)
            .catch(error => error)
        );
    }
};
<template>
    <div>

        <div class="navigation">

            <nav class="navbar navbar-expand-lg navbar-dark ">
                <a class="navbar-brand" href="#">Movies</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto ">
                        <li class="nav-item ">
                            <a class="nav-link" href="#">All

                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">HollyWood</a>
                        </li>

                        <li class="nav-item ">
                            <a class="nav-link " href="#">Shows</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link " href="#">Animation</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="infoUrl" v-on:keyup.enter="getapi(infoUrl)">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" v-on:click="getapi(infoUrl)">Search</button>
                    </form>
                </div>
            </nav>
        </div>

        <div class="row">
            <div class="filterHeader">
                <label>Genre</label>
                <select>
                    <option>All</option>
                    <option>Animation</option>
                    <option>Horrier</option>
                </select>

            </div>
        </div>

        <!-- <input type="text" placeholder="Search" v-model="infoUrl" v-on:keyup.enter="getapi(infoUrl)"><br> -->

        <!-- <b-button variant="success" v-on:click="getapi(infoUrl)"> sort</b-button> -->

        <div class="container">
            <div class="main-content">
                <div class="row" v-for="(demo,index) in movie_data" :key="demo">

                    <div class="col-md-4" v-if="demo.show.image">
                        <div class="img-content">
                            <!-- <pre>{{demo.show.image|json}}</pre> -->
                            <img :src="demo.show.image.medium" :alt="demo.show.name" :title="demo.show.name" />
                        </div>
                    </div>
                    <div class="col-md-4 " v-else>
                        <div class="img-content">
                            <img src="https://purewestrealestate.com/theme-frontend/images/no_image_found.png " :alt="demo.show.name" :title="demo.show.name" />
                        </div>
                    </div>

                    <div class="col-md-8 ">
                        <div class="content">
                            <label>Movie Name:{{demo.show.name}}<br>Type:{{demo.show.type}}<br>Language:{{demo.show.language}}<br>Movie Type:{{demo.show.genres}}<br>Relese Date:{{demo.show.premiered}}<br>Description:
                                <p v-html="demo.show.summary">{{demo.show.summary}}</p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footerr>
        </footerr>
    </div>
</template>

<script>
import moment from "moment";
import movieapi from "@/service/movieapi.js"
import footerr from "@/components/footer.vue"

export default {

    data() {
        return {

            search: '',
            // movies: [{
            //     image: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
            //     name: "Avengers: Infinity War",
            //     date: "April 23, 2018",
            //     time: "149 minutes",
            //     desc: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
            // },
            // {
            //     image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Gold_2018_poster.jpg/220px-Gold_2018_poster.jpg",
            //     name: "Gold",
            //     date: "15 August 2018",
            //     time: "153 minutes",
            //     desc: "Set in 1948, the historic story of India's first Olympic medal post their independence.",
            // },
            // {
            //     image: "https://upload.wikimedia.org/wikipedia/en/8/87/Singam_3_poster.jpg",
            //     name: "Singam 3",
            //     date: "9 February 2017",
            //     time: "154 minutes",
            //     desc: "Uncompromising police chief Durai Singam battles against a criminal operation dealing in deadly toxic waste.",
            // },
            // {
            //     image: "https://upload.wikimedia.org/wikipedia/en/2/27/The_Incredibles_2.jpg",
            //     name: "Incredibles 2",
            //     date: "June 5, 2018",
            //     time: "118 minutes",
            //     desc: "Bob Parr (Mr. Incredible) is left to care for the kids while Helen (Elastigirl) is out saving the world.",
            // },
            // {
            //     image: "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png",
            //     name: "Deadpool",
            //     date: "February 8, 2016",
            //     time: "108 minutes",
            //     desc: "A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.",
            // }],
            movie_data: [],
            infoUrl: ""
        }
    },
    // computed: {
    //     filteredList() {
    //         return this.movie_data.filter(post => {
    //             return post.show.name.toLowerCase().includes(this.search.toLowerCase())
    //         })
    //     }
    // },
    created() {
        this.getapi();
        /// this.getimage();
    },
    methods: {
        getapi(infoUrl) {

            console.log("this is infoUrl:::::::", infoUrl)
            movieapi.getmovies(infoUrl).then(data => {
                this.movie_data = data;
                console.log("this is demo")

            })

        },

        // getimage() {

        //     movieapi.getmovie().then(image => {

        //         this.api_image = image.medium;
        //         console.log("this is image")
        //     })
        // }


    },
    components: {
        footerr,
    }

}
</script>

<style>
.img-content img {
    height: 200px;
    width: 150px;
    margin-top: 30px;
}

label {
    margin: -6px 0px 0px 0px;
    text-align: start;
}

.row {
    border-bottom: 1px solid silver;
}

.navigation {
    background-color: #081c24;
}


.nav-link:hover {
    /* color: rgba(0, 0, 0, 0.7); */
    background-color: #9595d2;
}

filterHeader {
    border: 10px solid red;
}






























/* 
.navbar-nav .nav-link:hover {

    background-color: red
} */
</style>

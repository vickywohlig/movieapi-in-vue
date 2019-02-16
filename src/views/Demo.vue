<template>
    <div>
        <h3 class="header" v-for="demo in character" :key="demo">
            <p class="jumbotron">{{demo}}</p>
        </h3>
        <person v-for="team in teams " v-bind:detail="team "></person>

        <section>
            <div>
                <div class="jumbotron">
                    <h1>Vue documentation start from here</h1><br>

                </div>
            </div>
        </section>

    </div>
</template>

<script>
import person from "@/components/person";
import moment from "moment"
import apiservice from "@/service/apiservicee"
export default
    {
        data() {
            return {
                teams: [{
                    name: "Java",
                    About: "All Rounder",
                    doa: moment("10-09-1992", "DD-MM-YYYY")
                }, {
                    name: "Python",
                    About: "AI Development",
                    doa: moment("10-05-2010", "DD-MM-YYYY")
                }, {
                    name: "Vue",
                    About: "Web Development",
                    doa: moment("05-07-2015", "DD-MM-YYYY")
                }, {
                    name: "Sql",
                    About: "Database",
                    doa: moment("10-10-1990", "DD-MM-YYYY")
                }, {
                    name: "SASS",
                    About: "Warehouse",
                    doa: moment("10-9-2005", "DD-MM-YYYY")
                }],
                character: {},
            }
        },
        created() {
            this.getvickysAPI();
        },
        components: {
            person
        },
        methods: {
            getvickysAPI() {
                apiservice.getcharacter().then(data => {

                    this.character = data;
                });
            }
        }
    }

</script>

<style>

</style>

<template>
    <div class="person">
        <p>Name:
            <span>
                <b>{{detail.name}}</b>
            </span>
        </p>
        <p>About:
            <span>
                <b>{{detail.About}}</b>
            </span>
        </p>
        <p>Date Of Associate:
            <span>
                <b>{{detail.doa|formatDOA}}</b>
            </span>
        </p>
    </div>
</template>

<script>
import moment from "moment";
export default
    {

        props: ["detail"],
        filters:
        {
            formatDOA: function(value) {
                if (value) {
                    return moment(value).format("Do MMMM YYYY, dddd")
                }
                else {
                    return "No Data found"
                }
            }


        }
    }
</script>

<style>
.person {
    border: 1px solid #f1ebeb;
    padding: 20px;
}
</style>

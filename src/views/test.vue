<template>
    <div class="test">
        <design/>
        <div class="row">
            <div class="col-md-4">
                <img alt="demo" src="../assets/icon1.png">
                <p>UNIFORM</p>
            </div>
            <div class="col-md-4">
                <img alt="demo" src="../assets/icon2.png">
                <p>LUNCH SERVICE</p>
            </div>
            <div class="col-md-4">
                <img alt="demo" src="../assets/icon4.png">
                <p>HEALTHCARE SUPPORT</p>
            </div>

            <div class="col-md-4">
                <img alt="demo" src="../assets/icon3.png">
                <p>BUS SERVICE</p>
            </div>
            <div class="col-md-4">
                <img alt="demo" src="../assets/icon5.png">
                <p>OPEN DOOR POLICY</p>
            </div>
        </div>

        <!--vic v-for="detail in tweets" v-bind:det="detail"></vic-->

        <footerr/>
    </div>
</template>

<script>
import design from '@/components/design';
import footerr from '@/components/footer';
//import vic from '@/components/content';

export default
    {

        /*data() {
             return {
                 tweets: [{
                     img: '../assets/icon1.png',
                     text: "UNIFORM"
                 },
                 {
                     img: "../assets/icon2.png",
                     text: "LUNCH SERVICE"
                 },
                 {
                     img: "../assets/icon4.png",
                     text: "HEALTHCARE SUPPORT"
                 },
                 {
                     img: "../assets/icon3.png",
                     text: "BUS SERVICE"
                 },
                 {
                     img: "../assets/icon5.png",
                     text: "OPEN DOOR POLICY"
                 }]
             }
        },*/
        components:
        {
            design, footerr
        },



    };
</script>

<style>

</style>

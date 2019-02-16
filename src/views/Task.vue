<template>
    <div>
        <design>
        </design>
        <div class="jumbotron">
            <div class="form">
                <div class="formgroup">
                    <label for="username">Username:</label>
                    <input class="formcontrol" type="text" v-model="Username" placeholder="Enter UserName">
                    <p>{{Username|uppercase}}</p>
                </div><hr>
                <div class="formgroup">
                    <label for="password">Password: </label>
                    <input class="formcontrol" type="password" v-model="Password" placeholder="Enter Password"><br>

                    <span style="color:red">{{msg.Password}}</span>

                </div>
                <div class="formgroup">
                    <label for="confirm password">Confirm Password:</label>
                    <input class="formcontrol" type="password" v-model="Confirm_Password" placeholder="Please Enter Confirm Password">
                    <span style="color:red">{{msg.Confirm_Password}}</span>
                </div>
                <button class="btn">submite</button>
            </div>

        </div>
        <div class="container">
            killometer:<input type="number" v-model="killometer"><br> meter:
            <input type="number" v-model="meter">
        </div>
        <example></example>

    </div>
</template>

<script>
import design from "@/components/design"
import example from "@/components/componentexample";
export default
    {
        data() {
            return {
                Username: "",
                Password: "",
                Confirm_Password: "",
                msg: [],
                killometer: "",
                meter: ""

            }
        },
        watch:
        {
            Password(value) {

                if (value.length < 5) {
                    this.msg['Password'] = "**Password length must be geater then 5"
                } else {
                    this.msg['Password'] = ""
                }
            },
            Confirm_Password(value) {
                if (this.Password == this.Confirm_Password) {
                    this.msg['Confirm_Password'] = ""
                    //console.log("This is demo")
                }
                else {
                    this.msg['Confirm_Password'] = "** Paasword doesnot match**";
                }
            },
            killometer(value) {
                this.killometer = value
                this.meter = value * 1000
            },
            meter(value) {
                this.meter = value
                this.killometer = value / 1000
            }
        },
        filters:
        {
            uppercase(value) {
                return value.toUpperCase()
            }
        },
        components: {
            example, design
        }
    }



</script>

<style>

</style>

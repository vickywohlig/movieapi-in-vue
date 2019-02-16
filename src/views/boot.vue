<template>
    <div>
        <b-alert varient="Success" show dismissible>Hey Vue Js
            <a href="#" class="alert-link">example</a>
        </b-alert>
        <h1>welcome to
            <b-badge>Vue js</b-badge>
        </h1>

        <h2>Welcome To
            <b-badge pill>Vue Js</b-badge>
        </h2>

        <b-button>Click Me</b-button>
        <b-button disabled>Click Me</b-button><br><br>

        <b-button-group size="sm">
            <b-button>Button1</b-button>
            <b-button>Button2</b-button>
            <b-button>Button3</b-button>
            <b-dropdown left split dropup text="menu" class="m-0">
                <b-droupdown-item>Item1</b-droupdown-item>
                <b-droupdown-item>Item2</b-droupdown-item>
                <b-droupdown-divider></b-droupdown-divider>
                <b-droupdown-item>Item3</b-droupdown-item>
            </b-dropdown>
            <b-button>Button4</b-button>
            <b-button>Button5</b-button>
        </b-button-group>
        <br><br>
        <b-button-group size="lg">
            <b-button variant=" success ">Success</b-button>
            <b-button variant="warning ">Warning</b-button>
            <b-button variant="info ">Info</b-button>
            <b-button variant="danger ">Danger</b-button>
            <b-button variant="primary ">Primary</b-button>
            <b-button variant="link ">Link</b-button>
        </b-button-group>

        <p>{{foo}}</p>
        <b-button show v-on:click="foo='baz'">Change It</b-button>

        <b-container>
            <b-row style="background-color: silver;">
                <b-col> 1 to 3</b-col>
                <b-col>2 to 3</b-col>
                <b-col>3 to 3</b-col>
            </b-row>
        </b-container>

        <b-alert :show="dismissCountDown" dismissible variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">This will remove {{dismissCountDown}} seconds...</b-alert>
        <b-button @click="showAlert">Click Me</b-button><br><br>

        <b-card img-src="https://picsum.photos/600/300/?image=25" title="Hey Vue Js" style="width: 30%;">
            <p class="card-text">lojdfbvfdbvjdfnvjdgbvjrdnvjfbrvjkdfnbjf</p>
        </b-card>
        <b-card title="card title" style="width:20rem">
            <img src="@/assets/icon1.png" alt="demo" top>
            <b-button show variant="primary">Click Me</b-button>
        </b-card>

        <b-carousel :interval="1000" controls img-width="1024" img_height="480">
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
            </b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
            </b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=55">
            </b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            </b-carousel-slide>
            <b-carousel img-alt="blank image" img-blank>
            </b-carousel>
        </b-carousel>

        <div>
            <p>
                <b>Note:</b> This example does not work in Internet Explorer 9 and earlier versions.</p>
            <div class="example">
                <div class="try"></div>
            </div>

        </div><br><br><br><br><br><br>

        <div class="container" style="background-color:silver">
            <div class="row">
                <div class="col-xs-5" style="background-color:orange">
                    <div class="main">
                    </div>
                </div>
                <div class="col-xs-7" style="background-color:blue">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="main"></div>
                        </div>
                        <div class="col-md-6">
                            <div class="main"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div><br><br>

        <div>
            <ul class="nav nav-tabs nav-fills justify-content-center">
                <li class="nav-item">
                    <a class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-item">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-item">Contact</a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
//var obj = { foo: 'bar' };

//object.freeze(obj)


export default {
    data() {
        return {
            foo: 'bar',
            dismissSecs: 5,
            dismissCountDown: 0

        }
    },

    methods:
    {
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },

    }

}
</script>

<style>
.example {
    width: 200px;
    height: 200px;
    background-color: black;
    position: relative;
    animation-name: trial;
    animation-duration: 5s;
    animation-direction: alternate;
}

.try {
    width: 100px;
    height: 100px;
    background-color: red;
    position: absolute;
    -webkit-animation-name: example;
    /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s;
    /* Safari 4.0 - 8.0 */
    -webkit-animation-direction: reverse;
    /* Safari 4.0 - 8.0 */
    animation-name: example;
    animation-duration: 2s;
    animation-direction: reverse;
}


















/* Safari 4.0 - 8.0 */

@-webkit-keyframes example {
    0% {
        background-color: red;
        left: 0px;
        top: 0px;
    }
    25% {
        background-color: yellow;
        left: 200px;
        top: 0px;
    }
    50% {
        background-color: blue;
        left: 200px;
        top: 200px;
    }
    75% {
        background-color: green;
        left: 0px;
        top: 200px;
    }
    100% {
        background-color: red;
        left: 0px;
        top: 0px;
    }
}


















/* St    50%  {background-color:blue; left:200px; top:200px;}
andard syntax */

@keyframes example {
    0% {
        background-color: red;
        left: 0px;
        top: 0px;
    }
    25% {
        background-color: yellow;
        left: 200px;
        top: 0px;
    }
    75% {
        background-color: green;
        left: 0px;
        top: 200px;
    }
    100% {
        background-color: red;
        left: 0px;
        top: 0px;
    }
}

@keyframes trial {
    5% {
        background-color: blue;
        left: 0px;
        top: 0px;
    }
    25% {
        background-color: orange;
        left: 300px;
        top: 0px;
    }
    50% {
        background-color: silver;
        left: 0px;
        top: 300px;
    }
    100% {
        background-color: yellow;
        left: 0px;
        top: 0px;
    }
}


div.main {
    margin: 20px;
    background-color: red;
    height: 300px;
    width: 300px;
    padding: 20px;
}
</style>

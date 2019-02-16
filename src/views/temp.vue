<template>
    <div>
        <b-navbar sticky toggleable="md" type="dark" variant="secondary">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Signout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
        <b-img fluid src="http://getwallpapers.com/wallpaper/full/d/6/a/155789.jpg" caption="This is just trail page" style="opacity:0.65;margin-top: -55px">
            <b-thmbnail>hfefvuehfuerhfuire</b-thmbnail>
        </b-img>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                    <h2 class="text-center mb-4">
                        <b> Landing page variants</b>
                    </h2 <p class="text-muted">
                    Incline comes with several professionally designed landing pages that can be easily adapted for any project.
                    </p><br><br>

                </div>
            </div>
            <div class="row ">
                <div class="col-md-4 " v-for="image in images" :key="image">
                    <div class="main-content">
                        <div class="img-content">
                            <img v-bind:src="image.name" style="height: 220px;width: 315px;">
                        </div>
                        <div class="content">
                            <h5>
                                <b>
                                    {{image.title}}</b>
                            </h5>
                            <p id="space">
                                {{image.para}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jumbotron">
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <p>
                            <b>Header variants
                            </b>
                        </p>

                        <p>Polish your landing page with one of the header options below to impress your visitors at first glance.</p>

                    </div>
                </div>
                <div class="row ">

                    <div class="col-md-4" v-for="image in images1" :key="image">
                        <div class="main-content">
                            <div class="img-content">
                                <img v-bind:src="image.name" style="height: 220px;width: 315px;">
                            </div>
                            <div class="content">
                                <p>
                                    <b>{{image.bold}}
                                        <h3 class="badge badge-danger">new</h3>
                                    </b>
                                </p>
                                <p>{{image.para}}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <p>

                        <span> This theme is a Swiss Army knife of Bootstrap themes. Built with components in mind, it can be easily adjusted to create layouts of any complexity within a few minutes. </span><br> Gamin, Moscow
                    </p>
                </div>
            </div>

            <div class="jumbotron" style="background-color: #4b5258;">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <p>
                            <h3 style="color:white"> Key theme features</h3>
                        </p><br>
                        <p style="color:silver">Incline can be used to create anything from a small marketing page to a sophisticated website.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4" v-for="image in images2" v-bind:key="image">
                        <img :src="image.name" style="width: 50px;height: 50px;">
                        <p>
                            <h5 style="color:white">{{image.heading}}</h5>
                        </p>
                        <p style="color:silver"> {{image.para}}</p>
                    </div>
                </div>
            </div>
            <div class="row ">
                <div class="col-md-6  ">
                    <h5>Intuitive workflow</h5>
                    <ul class="list-iconed text-muted ">
                        <li>Speed up your development process with Gulp and BrowserSync live browser reload
                        </li>
                        <li>Easily adjust the look of any component with tons of additional SASS variables included</li>
                        <li>Easily make global changes with HTML file @@includes
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 ">
                    <img src="https://img.freepik.com/free-vector/programmers-concept-with-flat-design_23-2147854276.jpg?size=338&ext=jpg">
                </div>
            </div>
            <div class="jumbotron" style="background-color: #f4faff;">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <h3>Download it from the Bootstrap marketplace</h3>
                        <p>
                            Each theme featured at the Bootstrap marketplace has been reviewed by Bootstrap's creators. Six month technical support by the theme author is provided.

                        </p>

                        <b-button variant="info" show>PURCHAE NOW</b-button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {

            images:
            [{
                name: "https://simpleqode.bitbucket.io/incline/assets/img/45.png",
                title: "App landing",
                para: "Use this page to promote your web or mobile application."
            }, {
                name: "https://simpleqode.bitbucket.io/incline/assets/img/57.png",
                title: "Fullpage scrolling",
                para: "A landing page created with fullscreen scrolling sections."
            }, {
                name: "https://simpleqode.bitbucket.io/incline/assets/img/44.png",
                title: "Product landing",
                para: "Use this page to promote your product or a store."
            }, {
                name: "https://simpleqode.bitbucket.io/incline/assets/img/46.png",
                title: "Real estate landing",
                para: "Use this page to promote your real estate."
            }, {
                name: "https://simpleqode.bitbucket.io/incline/assets/img/43.png",
                title: "Service landing",
                para: "Use this page to promote your business or a service."
            }],

            images1:
            [{
                name: "https://simpleqode.bitbucket.io/incline/assets/img/51.png",
                bold: "Carousel header",
                para: "Switch between multiple slides with full cover background images."
            }, {
                name: "https://simpleqode.bitbucket.io/incline/assets/img/52.png",
                bold: "Parallax header",
                para: "Good old parallax effect to add even more visual interest to your page."
            }, {
                name: "https://simpleqode.bitbucket.io/incline/assets/img/53.png",
                bold: "Video header",
                para: "Local video background you can optionally loop if needed."
            }],

            images2:
            [{
                name: "http://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/iMac-icon.png",
                heading: "Fully responsive",
                para: "Looks great on all major browsers, tablets and mobile devices."
            }, {
                name: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1EEiL-e0idftV51jTczXl9lfHL6yND3G-vgT7p2s469j7p0d",
                heading: "Built with SASS",
                para: "Easily adjustable with tons of SASS variables included."
            }, {
                name: "https://mbtskoudsalg.com/images/gmail-logo-png-transparent-background-8.png",
                heading: "Free support",
                para: "Feel free to contact us with any feature requests or bug reports."
            }]
        }

    }
}
</script>

<style>
.img-content {
    padding-bottom: 28px;
}

img:hover {
    box-shadow: 0px 10px 10px grey;
}

.content {
    padding: 30px 0 70px 0px;
}

p.content {
    margin-top: 20px;
}

#space {
    margin-top: 20px;
}
</style>

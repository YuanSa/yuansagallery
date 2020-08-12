<template>
    <div id="app">
        <Header :section="$store.state.section" />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import sassStyles from "@/components/components.scss";

export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
};
</script>

<style lang="scss">
@use '/css/components.scss';

$themeColor: hsl(309, 70%, 47%);
$backgroundColor: white;
$headerHeight: 6.5em;

* {
    box-sizing: border-box;
}
html {
    height: 100%;
    body {
        margin: 0;
        height: 100%;
        #app {
            display: grid;
            grid-template-rows: auto 1fr auto;
            height: 100%;
        }
    }
}
</style>

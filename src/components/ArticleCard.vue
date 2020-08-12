<template>
    <article>
        <router-link :to="'lab/' + link" class="logo">
            <div
                class="image"
                v-if="picture"
                :style="'background-image: url(/img/cover/' + picture + ')'"
            ></div>
            <div class="image" v-else style="background-image: url(/img/cover/default.svg)"></div>
            <!-- <img :src="'/img/cover/' + picture" alt="" /> -->
            <div class="text">
                <h1>{{ title }}</h1>
                <p v-for="para in summary">{{ para }}</p>
                <time :datetime="date">{{ date }}</time>
            </div>
        </router-link>
    </article>
</template>

<script>
export default {
    name: "ArticleCard",
    props: {
        title: String,
        summary: Array,
        date: String,
        author: String,
        picture: String,
        link: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
article {
    margin: 0.5em;
    width: 15em;
    height: min-content;
    border-radius: 0.5em;
    background-color: white;
    overflow: hidden;
    box-shadow: 0.1em 0.1em 0.5em 0 rgba(0, 0, 0, 0.2);
    transition: transform 0.5s, box-shadow 0.5s;

    &:hover {
        transform: translate(-1%, -1%);
        box-shadow: 0.3em 0.3em 1.5em 0 rgba(0, 0, 0, 0.1);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .image {
        height: 8.5em;
        background-size: cover;
        background-position: center;
    }

    // img {
    //     width: 100%;
    // }

    .text {
        padding: 1em;
    }

    h1 {
        margin: 0 0 0.5em 0;
        line-height: 1em;
    }

    p {
        margin: 0.25em 0;
        text-align: justify;
    }

    time {
        display: block;
        margin-top: 1em;
        color: #bbb;
        text-align: right;
        font-size: 0.7em;
    }
}

@media screen and (orientation: portrait) {
    article {
        margin: 1em 0;
        width: 100%;
    }
}
</style>

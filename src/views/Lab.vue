<template>
    <main>
        <article-card
            v-for="article in articles"
            :link="article.name"
            :title="article.title"
            :picture="article.picture"
            :summary="article.summary"
        />
    </main>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";
import axios from "axios";

export default {
    name: "Lab",
    components: {
        ArticleCard,
    },
    data() {
        return {
            articles: [],
        };
    },
    created() {
        this.$store.dispatch("navigateTo", "lab");
        axios
            .get("http://localhost:3000/data")
            .then((response) => {
                this.articles = response.data; // <--- set the events when returned
            })
            .catch((error) => {
                console.log("There was an error:", error.response);
            });
    },
};
</script>

<style scoped lang="scss">
main {
    background-color: #f5f5f5;

    display: flex;
    flex-wrap: wrap;

    padding: 2em;
}

@media screen and (orientation: horizontal) {
    main {
        flex-direction: column;
        align-items: center;
    }
}
</style>

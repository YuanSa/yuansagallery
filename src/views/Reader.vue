<template>
    <main>
        <article-card
            link=""
            title="当title很长的时候就是这个样子"
            picture="pins.jpg"
            date="2008-02-14 20:00"
            :summary="['元卅馆教程即将恢复更新', '下一次更新的内容由你决定']"
            v-for="a in [1, 2, 3, 4, 5]"
        />
    </main>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";

export default {
    name: "Reader",
    components: {
        ArticleCard,
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

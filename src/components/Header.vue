<template>
    <header>
        <div class="name">
            <router-link to="/" class="logo">
                <img src="favicon.ico" alt="Logo" />
                <div lang="zh-Hans">元卅馆</div>
                <div lang="en">Yuan Sa Gallery</div>
            </router-link>
            <!-- <div class="title">首页</div> -->
        </div>
        <nav>
            <router-link to="/" :class="{ selected: section == 'home' }">首页</router-link>
            <div style="cursor: not-allowed;">更多板块建设中</div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        section: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$themeColor: hsl(309, 70%, 47%);
$backgroundColor: white;

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    border-bottom: solid thin #eee;
    background-color: white;

    a {
        color: inherit;
        text-decoration: none;
    }

    .name {
        display: flex;
        align-items: center;

        .logo {
            display: grid;
            grid-template: 1.8em 1.2em /3em auto;
            font-size: 1.5em;

            img {
                padding: 0.2em;
                grid-area: 1/1 / 3/2;
                place-self: center;
                width: 100%;
                height: 100%;
            }
            div {
                line-height: 1em;
            }
            div[lang="zh-Hans"] {
                grid-area: 1/2 / 2/3;
                align-self: end;
                font-size: 1.5em;
                font-weight: bold;
            }
            div[lang="en"] {
                grid-area: 2/2 / 3/3;
                align-self: start;
                padding-top: 0.2em;
                font-size: 0.7em;
                font-weight: lighter;
            }
        }

        .title {
            margin-left: 1.5em;
            padding-left: 1em;
            font-size: 1.5em;
            font-weight: lighter;
            border-left: dashed thin #aaa;
        }
    }

    nav {
        display: flex;

        * {
            padding: 0.5em;

            &:hover {
                background-color: #f7f7f7;
                border-bottom: solid #e0e0e0;
            }
        }
        .selected {
            font-weight: bold;
            color: $themeColor;
            border-bottom: solid;
        }
    }
}

@media screen and (orientation: portrait) {
    header {
        flex-direction: column;
        align-items: flex-start;
        padding: 1em 0;
        border-style: none;

        nav {
            width: 100%;
            padding: 0 0.6em;
            font-size: 0.8em;
            background-color: #f4f4f4;

            * {
                padding: 0.2em 0.6em;

                &:hover {
                    border-bottom: none;
                }
            }

            .selected {
                font-weight: bold;
                color: white;
                background-color: $themeColor;
                border: none;
            }
        }
    }
}
</style>

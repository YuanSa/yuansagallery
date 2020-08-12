<template>
    <footer>
        <div class="links">
            <a href="">联系站长</a>
            <a href="">版权声明</a>
        </div>
        <div class="contacts">
            <a href="https://space.bilibili.com/2878969" class="qrcode">
                <img src="img/qrcode-bilibili.png" alt="Bilibili视频网个人主页二维码" />
                <span>Bilibili</span>
            </a>
            <a href="https://www.zhihu.com/people/yuansa" class="qrcode">
                <img src="img/qrcode-zhihu.png" alt="Bilibili视频网个人主页二维码" />
                <span>知乎</span>
            </a>
        </div>
        <div class="records">
            <a href="http://www.miit.gov.cn/">冀ICP备17026957号 </a>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51010802000387"
                >川公网安备51010802000387号
            </a>
            <a>版权所有 ©2020-2021 元卅馆 点灯科技</a>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
footer {
    display: grid;
    grid-template: 1fr auto / 1fr auto;
    gap: 0.4em;
    padding: 1rem;
    color: white;
    font-weight: lighter;
    font-size: 0.75em;
    background-color: black;

    a {
        padding: 0 0.3em;
        color: inherit;
        text-decoration: none;
        border: dotted thin transparent;

        &:hover {
            border-color: inherit;
        }
    }

    .links {
        grid-area: 1/1 / 2/2;
        display: flex;
        flex-direction: column;
    }
    .contacts {
        grid-area: 1/2 / 3/3;
        justify-self: end;
        display: flex;
        padding-left: 1em;
        border-left: dashed thin #666;
    }
    .records {
        grid-area: 2/1 / 3/2;
        display: flex;
        flex-direction: column;
    }
}

@media screen and (orientation: portrait) {
    footer {
        display: grid;
        gap: 0.4em;
        padding: 1rem;
        color: white;
        font-weight: lighter;
        font-size: 0.75em;
        background-color: black;

        a {
            padding: 0 0.3em;
            color: inherit;
            text-decoration: none;
            border: dotted thin transparent;

            &:hover {
                border-color: inherit;
            }
        }

        .links {
            grid-area: 1/1 / 2/2;
            display: flex;
            flex-flow: row wrap;
        }
        .contacts {
            display: none;
        }
        .records {
            grid-area: 2/1 / 3/2;
            display: flex;
            flex-direction: column;
        }
    }
}
</style>

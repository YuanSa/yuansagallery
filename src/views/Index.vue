<template>
    <main>
        <div class="banner" id="cover">
            <h1>让世界更美好</h1>
            <h2>立足实践 光速入门</h2>
            <div class="button-group" style="text-align: center">
                <a href="#sec1">
                    <button class="ys-line ys-white">让 Photoshop 更简单</button>
                </a>
                <a href="#sec2"><button class="ys-line ys-white">让论文排版更方便</button></a>
                <a href="#sec3"><button class="ys-line ys-white">让网页设计更通俗</button></a>
                <a href="#sec4"><button class="ys-line ys-white">让编程更简单</button></a>
            </div>
        </div>
        <div class="two-col" id="sec1">
            <img src="img/art/man-forest-double-exposure.jpg" alt="" style="left: -35%" />
            <div>
                <h1>让<span class="focus">Photoshop</span>更简单</h1>
                <p>一共 10 期视频</p>
                <p>每期视频学会一个实用技能。</p>
                <p>学习<b>每一期</b>视频，都会有肉眼可见的能力提升</p>
                <p>课程结束后，你会了解PS的原理，并获得<b>无以伦比的自信</b></p>
                <div class="button-group">
                    <a href="https://space.bilibili.com/2878969/channel/detail?cid=63415">
                        <button class="ys-line">
                            去 Bilibili 观看视频教程（新版连载中）
                        </button>
                    </a>
                    <a href="https://github.com/YuanSa/PS-Tutotial"
                        ><button class="ys-line">来 GitHub 一起创作</button></a
                    >
                </div>
            </div>
        </div>
        <div class="two-col" id="sec2">
            <div>
                <h1>让<span class="focus">论文排版</span>更方便</h1>
                <p>你还在为论文排版苦恼吗？</p>
                <p>你还在一段一段手动改格式吗？</p>
                <p><b>不！</b>Word <b>远</b>比你以为的强大！</p>
                <p>用 40 分钟的时间，让我带你重新认识 Word</p>
                <div class="button-group">
                    <a href="https://www.bilibili.com/video/BV1hJ41157nT"
                        ><button class="ys-line">前往 Bilibili 观看视频教程</button></a
                    >
                </div>
            </div>
            <img src="img/art/griffin.png" alt="" style="left: 5%; bottom: 5%" />
        </div>
        <div class="two-col" id="sec3">
            <img src="img/art/rhino.png" alt="" style="left: -58%" />
            <div>
                <h1>让<span class="focus">网页设计</span>更通俗</h1>
                <p>简明入门前端基本功：HTML5、CSS3</p>
                <div class="button-group">
                    <a href="https://space.bilibili.com/2878969/channel/detail?cid=44846"
                        ><button class="ys-line">
                            前往 Bilibili 观看视频教程（待更新）
                        </button></a
                    >
                </div>
            </div>
        </div>
        <div class="two-col" id="sec4">
            <div>
                <h1>让<span class="focus">编程</span>更简单</h1>
                <p>这将会是一套非常厉害的编程教程</p>
                <p>我明天就开始写</p>
                <div class="button-group">
                    <button class="ys-line">敬请期待</button>
                </div>
            </div>
            <img src="img/art/armillary-sphere.png" alt="" />
        </div>
        <div class="bgi-box" style="background-image: url(img/art/flower.png);">
            <div class="card">
                <h1>贡献力量</h1>
                <p>您可以贡献出自己的力量，降低知识壁垒</p>
                <div class="button-group">
                    <a href="https://github.com/YuanSa/PS-Tutotial"
                        ><button class="ys-line ys-white">GitHub 参与改良</button></a
                    >
                    <a href="https://www.paypal.com/myaccount/settings/"
                        ><button class="ys-line ys-white">PayPal 资助</button></a
                    >
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "Index",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#cover {
    color: white;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url(/img/art/geometry.jpg);
    background-position: center;
    background-size: cover;

    h1 {
        margin: 0;
        font-size: 3em;
    }
    h2 {
        margin: 0;
        font-size: 1.5em;
    }
}

.button-group {
    margin-top: 2em;
}

.two-col {
    margin: 10em 0;
}

@media screen and (orientation: portrait) {
    .two-col {
        margin: 4em 0;
        width: 100vw;
        overflow-x: hidden;

        > *:first-child,
        > *:last-child {
            justify-self: start;
            text-align: left;
        }
        > div {
            margin: 10em 0;
            padding: 0.5em;
            z-index: 1;
            background-color: rgba(255, 255, 255, 0.8);

            p {
                text-align: left;
            }
        }
        img {
            height: 100%;
            max-width: none;
            position: relative;
        }
    }
}
</style>

<template>
    <div class="temp">
        <!--图片轮播部分代码，从mint-ui组建中获取-->
        <Lunbo :lunboData="msg"></Lunbo>

        <!--九宫格添加-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图片分享</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before{
        content: " ";
    }
    .mui-icon {
        width: 40px;
        height: 40px;
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
    }
    .mui-icon-home{
        background-image: url("../../images/news.png");
        /*设置环绕*/
        background-repeat: round;
    }
    .mui-icon-email{
        background-image: url("../../images/picShare.png");
        /*设置环绕*/
        background-repeat: round;
    }
    .mui-icon-chatbubble{
        background-image: url("../../images/goodShow.png");
        /*设置环绕*/
        background-repeat: round;
    }
    .mui-icon-location{
        background-image: url("../../images/feedback.png");
        /*设置环绕*/
        background-repeat: round;
    }
    .mui-icon-search{
        background-image: url("../../images/search.png");
        /*设置环绕*/
        background-repeat: round;
    }
    .mui-icon-phone{
        background-image: url("../../images/callme.png");
        /*设置环绕*/
        background-repeat: round;
    }
</style>

<script type="text/ecmascript-6">
    // 导入工具类
    import common from '../../tool/Common'

    import Lunbo from '../sub/Lunvo.vue'

    export default {
        data() {
            return {
                msg: [
                    {
                        img: 'A'
                    },
                    {
                        img: 'B'
                    },
                    {
                        img: 'C'
                    }
                ]
            }
        },
        components: {
            Lunbo
        },
        created() {
//            this.getLunboData()
        },
        methods: {
            getLunboData() {
                // 请求轮播图的数据
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}`
                this.$http.get(url).then(
                    response => {
                        // 成功的回调方法
                        console.log(response)
                        this.msg = response.body.message
                    },
                    response => {
                        // 失败的回调方法
                        console.log(response)
                    }
                )
            }
        }
    }
</script>
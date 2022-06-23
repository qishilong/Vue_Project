<template>
	<div class = "message-container"
	     ref = "message">
		<MessageArea
			title = "留言板"
			:subTitle = "`(${data.total})`"
			:list = "data.rows"
			:isListLoading = "isLoading"
			@submit = "handleSubmit"
		/>
	</div>
</template>

<script>
    import MessageArea from "@/components/MessageArea";
    import fetchData from "@/mixins/fetchData.js";
    import {
        getMessage,
        postMessage
    } from "@/api/message";
    import mainScroll from "@/mixins/mainScroll";
    
    export default {
        mixins    : [ fetchData ( {
                                      total: 0,
                                      rows : []
                                  } ),
                      mainScroll ( "message" )
        ],
        components: {
            MessageArea
        },
        data () {
            return {
                page : 1,
                limit: 10
            };
        },
        created () {
            this.$bus.$on ( "mainScroll",
                            this.handleScroll );
        },
        destroyed () {
            this.$bus.$off ( "mainScroll",
                             this.handleScroll );
        },
        computed: {
            hasMore () {
                return this.data.rows.length < this.data.total;
            }
        },
        methods : {
            handleScroll ( dom ) {
                if ( this.isLoading || !dom ) {
                    // 目前正在加载更多
                    return;
                }
                const range = 100; // 顶一个可接受的范围，在这个范围内都算达到了底部
                const dec = Math.abs ( dom.scrollTop + dom.clientHeight - dom.scrollHeight );
                if ( dec <= range ) {
                    this.fetchMore ();
                }
            },
            async fetchData () {
                return await getMessage ( this.page,
                                          this.limit );
            },
            // 加载下一页
            async fetchMore () {
                if ( !this.hasMore ) {
                    // 没有更多啦
                    return;
                }
                this.isLoading = true;
                this.page ++;
                const resp = await this.fetchData ();
                this.data.total = resp.total;
                this.data.rows = this.data.rows.concat ( resp.rows );
                this.isLoading = false;
            },
            async handleSubmit ( data,
                                 callback ) {
                const resp = await postMessage ( data );
                this.data.rows.unshift ( resp );
                this.data.total ++;
                callback ( "感谢您的留言" ); // 告诉子组件，我这边处理完了，你继续
            }
        }
    };
</script>

<style scoped
       lang = "less">
  .message-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 25px 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  .message-area-container {
    width: 700px;
    margin: 0 auto;
  }
</style>

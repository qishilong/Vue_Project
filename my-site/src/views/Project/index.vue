<template>
	<div class = "project-container"
	     ref = "project"
	     v-loading = "loading">
		<div class = "project-item"
		     v-for = "item in data"
		     :key = "item.id">
			<a :href = "item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`"
			   :target = "item.url ? '_blank' : '_self'">
				<img class = "thumb"
				     v-lazy = "item.thumb">
			</a>
			<div class = "info">
				<h2><a :href = "item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`"
				       :target = "item.url ? '_blank' : '_self'">{{ item.name }}</a></h2>
				<a :href = "item.github"
				   class = "github"
				   v-if = "item.github"
				   target = "_blank">github</a>
				<p v-for = "(desc, i) in item.description"
				   :key = "i">
					{{ desc }}
				</p>
			</div>
		</div>
		<Empty v-if = "data.length === 0 && !loading" />
	</div>
</template>

<script>
    import { mapState } from "vuex";
    import mainScroll from "@/mixins/mainScroll";
    import Empty from "@/components/Empty";
    
    export default {
        components: {
            Empty
        },
        mixins    : [ mainScroll ( "project" ) ],
        computed  : mapState ( "project",
                               [ "loading",
                                 "data"
                               ] ),
        created () {
            this.$store.dispatch ( "project/fetchProject" );
        }
    };
</script>

<style scoped
       lang = "less">
  @import "~@/styles/var.less";

  .project-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    overflow-y: auto;
    scroll-behavior: smooth;
  }

  .project-item {
    padding: 20px;
    display: flex;
    margin-bottom: 20px;
    transition: 0.5s;

    &:hover {
      box-shadow: -1px 1px 5px #000;
      transform: scale(1.01) translate(3px, -3px);
      color: inherit;
    }

    .thumb {
      width: 250px;
      min-height: 150px;
      flex: 0 0 auto;
      object-fit: cover;
      border-radius: 5px;
      margin-right: 15px;
    }

    .info {
      line-height: 1.7;
      flex: 1 1 auto;

      h2 {
        margin: 0;
      }
    }

    .github {
      font-size: 14px;
      color: @primary;
    }
  }
</style>

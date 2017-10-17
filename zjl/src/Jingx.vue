<template>
	<div>
		<div class="w-header_buttons">
			<router-link to="/a" class="w-header_button " active-class="w-header_button_selected w-header_button_selected" >精选</router-link>
			<router-link to="/game/all" active-class="w-header_button_selected w-header_button_selected" class="w-header_button" @focus="addc">直播</router-link>
			<router-link to="/category" active-class="w-header_button_selected w-header_button_selected" class="w-header_button" @focus="addc">分类</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'jingx',
		methods:{
			addc:function(){
				this.className = 'w-header_button_selected'
			}
		}
	}
</script>
<style detail>
	.w-header_buttons {
	    width: 100%;
	    display: flex;
	    align-items: center;
	}
	.w-header_button_selected {
    	color: #ff5253;
    	text-decoration: none;
	}
	.w-header_button {
	    width: 1rem;
	    height: auto;
	    height: .89rem;
	    width: 33.33333%;
	    text-align: center;
	    font-size: .32rem;
	    box-sizing: border-box;
	    padding-top: .29rem;
	    line-height: 1;
	    position: relative;
	    text-decoration: none;
	    display: inline-block;
	}
	.w-header_button:after {
	    content: ' ';
	    display: block;
	    position: absolute;
	    bottom: 0;
	    width: 1rem;
	    height: .06rem;
	    left: .6rem;
	    border-radius: 6px;
	}
	.w-header_button_selected:after {
   		background: #ff5253;
	}
</style>
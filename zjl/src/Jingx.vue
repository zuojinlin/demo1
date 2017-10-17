<template>
	<div>
		<div class="w-header_buttons">
			<router-link to="/" class="w-header_button w-header_button_selected">精选</router-link>
			<router-link to="/game/all" class="w-header_button">直播</router-link>
			<router-link to="/category" class="w-header_button">分类</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'jingx'
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
</style>
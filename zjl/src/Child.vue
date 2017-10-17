<template>
	<div class="head">
		<div class="logo"></div>
		<a href="" class="w-header_recharge">充值</a>
		<span class="w-header_login">登录</span>
	</div>
</template>
<script>
	export default {
		name: 'child'
	}
</script>
<style>
	.head {
		width: 100%;
    	height: .89rem;
    	background-color: #ff5253;
    	position: relative;
    }
    .logo{
    	    background: url(../img/logo_44638fa.png) no-repeat 0 0;
    		width: 1.4rem;
    		height: .44rem;
    		background-size: contain;
    		margin-left: .3rem;
    		float: left;
    		margin-top: .25rem;
	}
	.w-header_recharge{
		    font-family: PingFangSC-Regular;
    		font-size: .3rem;
   	 		color: #fff;
    		position: absolute;
    		right: 2rem;
    		top: .22rem;
	}
	.w-header_login{
		    width: 1.2rem;
		    padding: .04rem 0;
		    border-radius: 1rem;
		    border: .04rem solid #fff;
		    color: #fff;
		    font-size: .3rem;
		    text-align: center;
		    position: absolute;
		    right: .3rem;
		    top: .15rem;
		    box-sizing: border-box;
	}
</style>
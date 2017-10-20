<template>
	<div class="head">
		<div class="logo"></div>
		<a href="" class="w-header_recharge">充值</a>
		<span @click="handleClick" class="w-header_login">登录</span>
		<mt-popup
		  v-model="popupVisible"
		  position="bottom" class="c-dialog_body">
		  	<div class="c-dialog_title">请登录</div>
		  	<div class="c-dialog_content">
		  		<div class="w-login-pannel">
		  			<a class="qmtv-ui-button  w-login-pannel_login">全民直播账号登录</a>
		  			<a @click="posta" class="qmtv-ui-button ghost w-login-pannel_register">注册</a>
		  			<div class="w-login-pannel_split">
		  				<div class="w-login_split_left w-login_line">
		  					<div class="g-b-t"></div>
		  				</div>
		  				<div class="w-login-pannel_sub-title">第三方登录</div>
		  				<div class="w-login_split_right w-login_line">
		  					<div class="g-b-t"></div>
		  				</div>
		  			</div>
		  			<div class="w-login-pannel_icons">
		  				<img style="display:none" class="w-login-pannel_icon" src="../img/weixin.png">
		  				<img class="w-login-pannel_icon" src="../img/weixin.png">
		  				<img class="w-login-pannel_icon" src="../img/weibo.png">
		  			</div>
		  		</div>
		  	</div>
		  	<div class="c-dialog_close"></div>
		</mt-popup>
	</div>
</template>
<script>
import axios from 'axios';
	export default {
		name: 'child',
		data: function(){
			return {
				popupVisible: false
			}
		},
		methods: {
			handleClick: function(){
				this.popupVisible = true
			},
			posta: function(){
			      var that = this
			      axios.post('/register')
			      .then(function(response){
			        
			      })
			      .catch(function(error){
			        console.log(error);
			      })
			}
		}
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
	/*-----------------------------------*/
	.c-dialog_body {
	    border-radius: 0;
	    position: fixed;
	    bottom: 0;
	    /*left: 0;*/
	}
	.c-dialog_body {
	    /*border-radius: .1rem;*/
	    /*min-width: 5.8rem;*/
	    background: #fff;
	    /*position: relative;*/
	    display: inline-block;
	    overflow: hidden;
	    width: 100%;
	}
	.c-dialog_title {
	    padding: .27rem 0;
	    font-size: .36rem;
	    line-height: 1;
	    color: #34373b;
	    opacity: .5;
	    text-align: center;
	}
	.c-dialog_content {
	    min-height: 1.59rem;
	    color: #34373b;
	    position: relative;
	    word-break: break-all;
	    display: flex;
	    display: -webkit-flex;
	    justify-content: center;
	    -webkit-justify-content: center;
	    -webkit-box-orient: initial;
	    align-items: center;
	    -webkit-align-items: center;
	    -webkit-box-align: center;
	    padding: 0 .4rem;
	}
	.w-login-pannel {
	    box-sizing: border-box;
	    padding: .72rem 1.06rem .5rem;
	}
	.qmtv-ui-button {
	    border: 1px solid #ff5253;
	    border-radius: 1rem;
	    box-sizing: border-box;
	    line-height: .8rem;
	    background: #ff5253;
	    text-align: center;
	    width: 5.4rem;
	    height: .8rem;
	    color: #fff;
	    display: block;
	}
	.qmtv-ui-button.ghost {
	    background: #fff;
	    color: #ff5253;
	}
	.w-login-pannel_register {
	    margin-top: .3rem;
	}
	.qmtv-ui-button {
	    border: 1px solid #ff5253;
	    border-radius: 1rem;
	    box-sizing: border-box;
	    line-height: .8rem;
	    background: #ff5253;
	    text-align: center;
	    width: 5.4rem;
	    height: .8rem;
	    color: #fff;
	    display: block;
	    font-size: .5rem;
	}
	.w-login-pannel_split {
	    margin-top: .6rem;
	    color: rgba(154,155,157,.5);
	    font-size: .24rem;
	    display: flex;
	    width: 100%;
	    position: relative;
	    line-height: 1;
	}
	.w-login-pannel_split .w-login_split_left {
	    float: left;
	}
	.w-login-pannel_split .w-login_line {
	    width: 1.8rem;
	    position: relative;
	    margin-top: 2%;
	}
	.w-login-pannel_sub-title {
	    width: 1.68rem;
	    float: left;
	}
	.w-login-pannel_split .w-login_split_right {
	    float: left;
	}
	.w-login-pannel_split .w-login_line {
	    width: 1.8rem;
	    position: relative;
	    margin-top: 2%;
	}
	.g-b-t {
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 1px;
	    transform-origin: top left;
	    transform: scaleY(0.5);
	}
	.w-login-pannel_icons {
	    display: inline-block;
	    line-height: 1;
	}
	.w-login-pannel_icon {
	    width: .9rem;
	    height: .9rem;
	    margin: .1rem .4rem;
	    margin-top: .4rem;
	}
	.c-dialog_close {
	    position: absolute;
	    right: .29rem;
	    top: .32rem;
	    width: .26rem;
	    height: .26rem;
	    background: url(../img/x.png) no-repeat 0 0;
	    background-size: contain;
	}
</style>
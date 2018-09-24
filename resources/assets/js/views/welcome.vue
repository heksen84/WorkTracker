<template>
<b-container class="color-grey">

<div>
  <b-navbar toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="login">Авторизация</b-nav-item>
        <b-nav-item href="register">Регистрация</b-nav-item>
        <b-nav-item href="fresh-vacansies">Свежие вакансии</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

    <b-row class="text-center" style="margin-top:5px">
    	<b-col cols="12">
				<h1 class="title-text">ОтБаке</h1>
				<div style="font-size:124%;margin-top:-12px;margin-bottom:17px;letter-spacing:5px;color:rgb(100,100,250);font-weight:400">Сайт на котором есть работа</div>
				<a href="find-work"><b-button class="mb-1 mr-sm-0 mb-sm-0">Найти работу</b-button></a>
				<b-button href="offer-a-job" variant="success" @click="test" class="mb-0 mr-sm-0 mb-sm-0">Разместить вакансию</b-button>
    	</b-col>
    </b-row>

<b-row style="margin-top:5%">
<b-col>	
<b-form inline style="margin:auto;width:500px">
<b-form-group label="Поиск работы по специальности:">
		<b-form-input type="text" placeholder="Введите название специальности" class="mb-0 mr-sm-0 mb-sm-0" style="width:420px" v-model="search"></b-form-input>
		<b-button variant="primary" style="margin-left:5px" @click="searchData">Найти</b-button>
</b-form-group>
</b-form>
</b-col>
</b-row>

</b-container>
</template>

<script>
import axios from 'axios';
export default {
data () {
    return {
		search:""
	}
    },
	mounted() {},
	methods: {
	searchData() {
	  window.location='/searchWork?='+this.search;
	},
	test() {

		var data={}

		data.item1 = "vinni@puh.kz";
		data.item2 = "hello 2";

		axios.post("/create",  { 
		data: data
		}).then(function(response) 
		{
		   alert(response.data.msg)
		}).catch(function(error) {
		  console.log(error);
		});
	}
	}
}
</script>
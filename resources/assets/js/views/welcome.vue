<template>
<b-container>

<div>
  <b-navbar toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="login">Авторизация</b-nav-item>
        <b-nav-item href="register">Регистрация</b-nav-item>
        <!-- Navbar dropdowns -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

    <b-row class="text-center">
        <b-col class="greyText">
			<h1>WorkTracker</h1>
			<h4>это сайт где можно найти или разместить предложение о работе</h4>
		<br>
			<a href="find-work"><b-button>Найти работу</b-button></a>
			<b-button href="offer-a-job" variant="success" @click="test">Предложить работу</b-button>
	</b-col>	
    </b-row>
    <b-row style="margin-top:40px">
<b-col class="greyText">	
<b-form inline style="margin:auto;width:550">
<b-form-group label="Поиск работы по должности:">

		<b-form-input type="text" placeholder="Введите название должности, например: слесарь" class="mb-0 mr-sm-0 mb-sm-0" style="width:440px"></b-form-input>
		<b-button href="offer-a-job" variant="primary" @click="test" style="margin-left:5px">Найти</b-button>
</b-form-group>
</b-form>
</b-col>

    </b-row>
</b-container>
</template>

<script>
    
    import axios from 'axios';    

    export default {
        mounted() {
        },
	methods: {
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
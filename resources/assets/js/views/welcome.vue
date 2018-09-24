<template>
<b-container>
    <b-row class="text-center">
        <b-col class="greyText">
		<br>
		<br>
			<h1>WorkTracker</h1>
			<h5>это место где работодатель и работник находят друг друга</h5>
			<a href="find-work"><b-button>Найти работу</b-button></a>
			<b-button href="offer-a-job" variant="success" @click="test">Предложить работу</b-button>
	</b-col>	
    </b-row>
    <b-row class="text-center" style="margin-top:80px">
	<b-col class="greyText">	
		<b-form-input type="text" placeholder="Поиск работы на сайте" style="width:600px;margin:auto"></b-form-input>
		<b-button href="offer-a-job" variant="success" @click="test" style="margin-top:5px">Поиск</b-button>
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
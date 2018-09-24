<template>
<b-container>
    <b-row class="text-center">
        <b-col class="greyText">
		<br>
		<br>
		<h1>TeamBloger</h1>
		<h3>Personal blog for teams, groups or commands</h3>
		<br>
		<a href="register"><b-button variant="success">join</b-button></a>
		<b-button variant="success">TestPost</b-button>
	</b-col>
    </b-row>
</b-container>
</template>

<script>
    export default {
        mounted() {
        },
	methods: {
	hello() {
		alert("приветики");
	}
	}
	
    }
</script>

<template>
<b-container>
    <b-row>
      <b-col class="color-grey">
      <b-form style="width:330px;margin:auto;margin-top:70px">
      <h1 class="title-text" style="text-align:center">вход</h1>

      <b-form-group label="Логин:">
        <b-form-input type="text" required placeholder="Введите логин">
        </b-form-input>
      </b-form-group>


      <b-form-group label="Пароль:">
        <b-form-input type="password" required placeholder="Введите пароль">
        </b-form-input>
      </b-form-group>
	

      <b-form-group class="text-center">
       <a href="register" style="letter-spacing:8;font-weight:550;color:black">РЕГИСТРАЦИЯ</a>
      </b-form-group>

      <b-form-group class="text-center">
       <a href="restore">Забыли пароль?</a>
      </b-form-group>

      <b-form-group class="text-center">
	<b-button variant="success">Войти</b-button>
      </b-form-group>
      </b-form>

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
	}
     }	
}
</script>

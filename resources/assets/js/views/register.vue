<template>
<b-container>
    <b-row>
      <b-col class="color-grey">
      <b-form style="width:330px;margin:auto;margin-top:90px">
      <h1 class="h1-title">Регистрация</h1>

      <b-form-group label="<b>Логин:</b>">
        <b-form-input type="text" required placeholder="Введите логин">
        </b-form-input>
      </b-form-group>


      <b-form-group label="<b>Пароль:</b>">
        <b-form-input type="password" required placeholder="Введите пароль">
        </b-form-input>
      </b-form-group>

      <b-form-group class="text-center">
		<b-button variant="success">Продолжить</b-button>
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

<template>
  <div class = "wrapper">
    <div class="auth">
      <img src="@/assets/logo.png">
      <div class="auth/text">
        <h3>Вход</h3>
        <p>Используйте данные от учетной записи для входа на платформу</p>
      </div>
      <form @submit.prevent="submit">
        <input type="text" placeholder="Логин" v-model="form.login" required>
        <input @input="error=input()" :class="passClass" type="password" placeholder="Пароль" v-model="form.password" minlength="8" required>
        <input type="submit" value="Войти">
      </form>
    </div>
    <div v-show="error" class="error">Введен неверный логин/пароль! Такого пользователя не существует, обратитесь к администратору.</div>
  </div>
</template>

<script>
export default {
  name: 'AuthPage',
  data(){
    return{
      form:{
        password:'',
        login:''
      },
      passClass:'',
      error:false
    }
  },
  methods: {
    wrongUser(){
      this.passClass = "wrongPass";
      this.error=true;
    },
    input(){
      this.passClass = "";
      this.error=false;
    },
    async submit() {
      if( this.$store.state.users.find((el)=>el.login==this.form.login)&& this.$store.state.users.find((el)=>el.password==this.form.password)){
        this.$store.commit('setUser' ,this.$store.state.users.find((el)=>el.login==this.form.login));
        this.$router.push("/clients");
      }
      else
        this.wrongUser();
    },

  }
}
</script>

<style scoped>

  .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }

  h3{
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size:34px;
    color: #2C3242;
  }

  p, form input{
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size:22px;
    color: #6D768E;
  }

  .auth{
    display: flex;
    flex-direction: column;
    max-width: 500px;
  }

  img{
    max-width: 500px;
    max-height: 120px;
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  form input{
    width:100%;
    min-height: 64px;
    border-radius: 10px;
    border: solid 1px #6D768E;
    padding-left: 20px;
  }

  form input::placeholder{
    margin-left: 200px; 
  }

  input[type='submit']{
    border-radius: 10px;
    background-color: #688FF2;
    color: white;
    width: 50%;
    margin-top: 15px;
  }

  .wrongPass{
    background-color: #FFE5E5;
  }
  
  .error{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #DA3636;
    background-color: #FFE5E5;
    width: 70%;
    border-radius: 20px;
    margin-top: 100px;
    height: 40px;
}
</style>

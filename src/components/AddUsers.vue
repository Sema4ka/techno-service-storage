<template>
    <input v-model="user.login" placeholder="login" minlength="4">
    <input v-model="user.email" type="email" placeholder="mail" minlength="8">
    <input v-model="user.password" type="password" placeholder="password" minlength="8">
    <button @click="enterUser">Добавить пользователя</button>
</template>
<script>
    export default{
        data(){
            return{
                user:{
                    login:'',
                    email:'',
                    password:''
                }
            }
        },
        methods:{
            enterUser(){
                var cp = this.user;
                cp.id=this.$store.state.users.slice(-1).id+1;
                this.$store.commit('addUser', cp);
            }
        }
    }
</script>
<style scoped></style>
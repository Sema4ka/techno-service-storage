<template>
    <div class="nav">
        <img class="logo" src="@/assets/logo.png">
        <router-link style="text-decoration: none; color: inherit;" to="/clients"><p>Каталог таблиц</p></router-link>
        <router-link style="text-decoration: none; color: inherit;" v-if="$store.state.user.login=='admin'" to="/addUsers"><p>Добавить пользователей</p></router-link>
        <router-link style="text-decoration: none; color: inherit;" to="/profile">
            <img src="@/assets/tmpprofile.png">
        </router-link>
    </div>
</template>
<script></script>
<style scoped>
    .nav{
        position: sticky;
        top:0;
        box-shadow: 0px 4px 50px #DDE3F2A6;
        width: 100%;   
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size:20px;
        line-height: 25px;
        color: #2C3242;
        background-color: white;
        border-bottom: 1.5px solid #DDE3F2;
        margin-bottom: 10px;
    }

    p{
        text-decoration: none;
    }

    .logo{
        width: 285px;
        height: 75px;
    }



</style>
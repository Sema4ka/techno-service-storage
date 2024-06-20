<template>
    <div class="profile">
        <div class="profile-wrapper">
            <div class="profile-info">
                <img src="@/assets/tmpavatar.png">
                <p class="name">{{this.$store.state.user.name}}</p>
                <div class="profile-user-info">
                    <p class="left">Права доступа:</p>
                    <p class="right">{{this.$store.state.user.name == 'admin' ? 'admin' : 'user'}}</p>
                    <p class="left">Почта:</p>
                    <p class="right">{{this.$store.state.user.email}}</p>
                    <router-link to="/auth" class='exit' style="text-decoration: none; color: white;">Выйти</router-link>
                </div>
            </div>
            <CommonTable theme="profile" :name='[
                    "id",
                    "Действие",
                    "Сущность",
                    "Дата",
                ]' :content="data" class="table"/>
        </div>
    </div>
</template>
<script>
import CommonTable from "./CommonTable.vue"

export default{
    data(){
        return{
            data:[]
        }
    },
    components:{
        CommonTable
    },

    mounted() {
        this.data = [{
            id:'1',
            action: 'do',
            entyty: 'table1',
            date:'20.05.2024'
        }];
    },
}
</script>
<style scoped>
    .profile-user-info{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        align-items: center;

    }

    .left{
        font-family: 'Montserrat' sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 24.38px;
        text-align: left;
        text-wrap: nowrap;
    }
    
    .name{
        font-family: 'Montserrat' sans-serif;
        font-size: 34px;
        font-weight: 400;
        line-height: 41.45px;
        letter-spacing: -0.02em;
        text-align: center;
    }

    .right{
        text-align: right;
        font-family: 'Montserrat' sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.5px;
    }
    
    .profile{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80vh;
    }

    .profile-wrapper{
        width: 80%;
        display: flex;
        gap: 10%;
        justify-content: center;
        align-items: center;    
    }

    .table{
        width: 100%;
        min-height: 600px;
    }

    img{
        border-radius: 50%;
    }

    .exit{
        background-color: rgb(175, 26, 26);
        color:white;
        height: 40px;
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
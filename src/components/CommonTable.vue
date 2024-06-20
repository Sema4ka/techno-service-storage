<template>
    <div class="wrapper">
    <div :style="{'grid-template-columns': 'repeat('+colNums+', minmax(100px, 1fr))'}" class="table border">
        <div v-for="names in name" :key="names.index" class="first">{{names}}</div>
    </div>
    <div :style="{'grid-template-columns': 'repeat('+colNums+', minmax(100px, 1fr))'}" class="table main-table">
        <template v-for="row in content" :key="row.id">
            <div v-for="data in row" :key="data.index">{{ data }}</div>
            <button @click="$emit('clickChange', row.id)" v-if="theme=='main'" class="change-btn">Изменить</button>
        </template>
    </div>
    </div>
</template>
<script>
    export default{
        props:{
            theme: String,
            content: Object,
            name: Object
        },
        computed:{
            rowsNum(){
                return this.content.length;
            },
            colNums(){
                if(this.content[0] !== undefined){
                    const ob = this.content[0];
                    var rez = Object.keys(ob).length;
                    if(this.theme == 'main')
                        rez++;
                    return rez;
                }
                else
                    return this.name.length;
            }
        },
        methods:{
            clicked(e){
                alert(e);
            }
        }
        ,
        mounted(){
            
        }
    }
</script>
<style scoped>
    .table{
        display: grid;
        text-align: center;
        color: #2C3242;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.5px;
        text-align: center;
        font-family: "Montserrat", sans-serif;
        gap:20px 10px;
        margin-top: 15px;
    }

    .main-table{
        max-height: 60vh;
        overflow-y: scroll;
    }

    .first{
        color: #2C3242;
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        font-weight: 600;
        line-height: 24.38px;
        text-align: center;
        margin-bottom: 15px;
    }

    .border{
        border-bottom: solid 1px #DDE3F2;
    }

    .wrapper{
        display: flex;
        flex-direction: column;
        width: 1100px;
    }

    .main-table::-webkit-scrollbar {
        width: 5px;
        height: 8px;
        background-color: #DDE3F2;
        border-radius: 3px;
    }

    .change-btn{
        border-radius: 15px;
        background-color: white;
        font-family: "Montserrat", sans-serif;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.5px;
        min-height: 40px;
        width:60%;
        height: 70%;
    }

/* Add a thumb */
.main-table::-webkit-scrollbar-thumb {
  background: #688FF2;
  border-radius: 5px;
}
</style>
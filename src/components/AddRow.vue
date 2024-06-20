<template>
    <div class="change">
        <div class="field">
            <div class="field-row">
                <div class="inp" v-for="ob in obj" :key="ob.id">
                    <input :placeholder="ob"/>
                </div>
            </div>
            <button class="end-change" @click="stop(obj.id)">Добавить запись</button>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            obj:Object
        },
        data(){
            return{
                data:{}
            }
        },
        mounted(){
            this.data = {...this.obj};
        },

        methods:{
            stop(id){
                var r = this.$el.querySelectorAll('input');
                this.$emit('sub', id, r);
            }
        }
    }
</script>

<style scoped>
    .change{
        width: 100vw;
        height: 100vh;
        position: absolute;
        left: 0;
        right: 0;
        top:0;
        bottom: 0;
    }

    .field{
        background-color: gray;
        margin-top:40vh;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        width: 70vw;
        height: 20vh;

        background-color: white;
        border-radius: 25px;
        box-shadow: 0px 4px 0   #808BA73D;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .field-row{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80%;
        gap:10px;
    }

    input{
        border: 1px solid #6D768E;
        border-radius: 15px;
        min-height: 15px;
    }

    button{
        color:#688FF2;
        border: #688FF2 1px solid;
        border-radius: 15px;
        background-color: white;
        min-width: 40px;

        font-family: "Montserrat" sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.5px;
        text-align: left;

    }
</style>
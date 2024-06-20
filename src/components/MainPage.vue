<template>
  <div class="page-wrapper">
    <div class="inputs">
      <input type="text" class="search" placeholder="Поиск" v-model="searchFor"/>
    <button class="add-btn" @click="addData">Добавить запись</button>
  </div>
  <div class="page">
    <div class="tables">
      <router-link class="table-list" :class="{active: choosen=='clients'}" style="text-decoration: none; color: inherit;" to="/clients/">
        Клиенты
      </router-link>
      <router-link class="table-list" :class="{active: choosen=='orders'}" style="text-decoration: none; color: inherit;" to="/orders/">
        Заказы
      </router-link>
      <router-link class="table-list" :class="{active: choosen=='goods'}" style="text-decoration: none; color: inherit;" to="/goods/">
        Товары
      </router-link>
    </div>
    <CommonTable @click-change="change" theme="main" :name="names" :content="searched"></CommonTable>
  </div>
  </div>
  <ChangeRow v-if="isChange" :obj="toChange" @sub="hideCh"/>
  <AddRow v-if="isAdd" :obj="names" @sub="addR"/>

</template>

<script>
import CommonTable from './CommonTable.vue'
import ChangeRow from './ChangeRow.vue'
import AddRow from './AddRow.vue'
export default {
  name: 'MainPage',
  data(){
    return{
      clients:[
        'Название',
        'Количество заказов',
        'Общая сумма',
        'Телефон',
        'id'
    ],
      orders:[
        'Номер заказа',
        'Заказчик',
        'Кол-во товаров',
        'Дата заказа',
        'id'
      ],
      goods:[
        'Наименование',
        'Остаток',
        'Цена за штуку',
        'Дата приемки',
        'id'
      ],
      data:{},
      names:[],
      choosen:'clients',
      toChange:{},
      isChange: false,
      isAdd: false,
      searched:[],
      searchFor:''
    }
  },
  watch:{
    $route(neww, old){
      this.init();
    },
    searchFor(n, old){
      if(this.searchFor==''){
        this.searched = this.data;
        return;
      }
      var arr= [];
      for(var i in this.data){
        for(var j in this.data[i])
          if(this.data[i][j].toString().indexOf(this.searchFor) != -1){
            arr.push(this.data[i]);
            break;
          }
      }
      this.searched = arr;
        
    }
  },
  methods:{
    async init(){
      const axios = require('axios');
      var adress = 'https://6673196d6ca902ae11b31e6a.mockapi.io/';
      this.choosen = this.$route.params.table;
      adress+=this.choosen;
      if(this.$route.params.table.id !== undefined)
        adress+=this.$route.params.id;
      if(this.choosen == 'goods'){
        this.data = [
  {
    "name": "Electronic Metal Bike",
    "col": "5",
    "cost": "0418",
    "date": "2024-06-19T13:39:17.480Z",
    "lastdate": "2025-02-16T23:08:26.256Z",
    "id": "1"
  },
  {
    "name": "Luxurious Cotton Gloves",
    "col": "6",
    "cost": "7731",
    "date": "2024-06-19T10:13:07.817Z",
    "lastdate": "2025-06-12T05:30:57.935Z",
    "id": "2"
  },
  {
    "name": "Modern Fresh Shoes",
    "col": "9",
    "cost": "9683",
    "date": "2024-06-19T08:28:34.859Z",
    "lastdate": "2025-02-25T06:00:55.731Z",
    "id": "3"
  },
  {
    "name": "Recycled Frozen Keyboard",
    "col": "8",
    "cost": "8823",
    "date": "2024-06-19T21:32:33.102Z",
    "lastdate": "2024-07-31T14:49:24.672Z",
    "id": "4"
  },
  {
    "name": "Bespoke Plastic Tuna",
    "col": "3",
    "cost": "5460",
    "date": "2024-06-19T11:05:23.061Z",
    "lastdate": "2024-12-31T15:40:11.966Z",
    "id": "5"
  },
  {
    "name": "Ergonomic Granite Tuna",
    "col": "9",
    "cost": "3701",
    "date": "2024-06-19T07:18:59.509Z",
    "lastdate": "2025-05-27T21:26:03.018Z",
    "id": "6"
  },
  {
    "name": "Recycled Plastic Chicken",
    "col": "2",
    "cost": "1776",
    "date": "2024-06-19T10:03:18.067Z",
    "lastdate": "2025-05-30T13:10:07.250Z",
    "id": "7"
  },
  {
    "name": "Oriental Plastic Cheese",
    "col": "5",
    "cost": "4767",
    "date": "2024-06-19T08:49:25.649Z",
    "lastdate": "2025-03-18T06:57:43.618Z",
    "id": "8"
  },
  {
    "name": "Unbranded Plastic Chicken",
    "col": "3",
    "cost": "3244",
    "date": "2024-06-19T09:09:31.225Z",
    "lastdate": "2025-03-28T23:17:42.480Z",
    "id": "9"
  },
  {
    "name": "Incredible Frozen Hat",
    "col": "7",
    "cost": "2727",
    "date": "2024-06-19T06:25:51.127Z",
    "lastdate": "2024-12-20T06:51:34.100Z",
    "id": "10"
  },
  {
    "name": "Licensed Rubber Table",
    "col": "5",
    "cost": "7738",
    "date": "2024-06-19T08:05:52.178Z",
    "lastdate": "2025-01-31T06:19:06.404Z",
    "id": "11"
  },
  {
    "name": "Luxurious Bronze Ball",
    "col": "9",
    "cost": "8577",
    "date": "2024-06-19T17:11:51.519Z",
    "lastdate": "2025-01-16T05:36:56.074Z",
    "id": "12"
  },
  {
    "name": "Unbranded Fresh Salad",
    "col": "7",
    "cost": "9055",
    "date": "2024-06-19T20:58:53.818Z",
    "lastdate": "2024-09-30T10:03:02.409Z",
    "id": "13"
  },
  {
    "name": "Awesome Frozen Car",
    "col": "8",
    "cost": "9496",
    "date": "2024-06-19T06:05:30.687Z",
    "lastdate": "2025-01-20T20:21:02.280Z",
    "id": "14"
  },
  {
    "name": "Modern Frozen Bacon",
    "col": "5",
    "cost": "8854",
    "date": "2024-06-19T08:43:23.165Z",
    "lastdate": "2024-10-19T10:29:47.305Z",
    "id": "15"
  },
  {
    "name": "Luxurious Bronze Chicken",
    "col": "6",
    "cost": "1383",
    "date": "2024-06-19T09:10:43.038Z",
    "lastdate": "2025-02-21T19:18:39.843Z",
    "id": "16"
  },
  {
    "name": "Incredible Rubber Bike",
    "col": "7",
    "cost": "8260",
    "date": "2024-06-19T02:33:17.021Z",
    "lastdate": "2024-07-10T19:53:39.538Z",
    "id": "17"
  },
  {
    "name": "Sleek Concrete Keyboard",
    "col": "3",
    "cost": "3343",
    "date": "2024-06-19T01:23:49.695Z",
    "lastdate": "2024-11-14T11:45:18.813Z",
    "id": "18"
  },
  {
    "name": "Unbranded Frozen Chicken",
    "col": "2",
    "cost": "3775",
    "date": "2024-06-19T14:20:48.641Z",
    "lastdate": "2024-11-18T11:48:23.498Z",
    "id": "19"
  },
  {
    "name": "Handcrafted Rubber Bacon",
    "col": "8",
    "cost": "9402",
    "date": "2024-06-19T20:09:51.841Z",
    "lastdate": "2024-09-30T12:25:39.788Z",
    "id": "20"
  },
  {
    "name": "Luxurious Soft Cheese",
    "col": "2",
    "cost": "4657",
    "date": "2024-06-19T20:17:11.772Z",
    "lastdate": "2025-05-29T06:56:25.491Z",
    "id": "21"
  },
  {
    "name": "Modern Plastic Fish",
    "col": "7",
    "cost": "6781",
    "date": "2024-06-19T09:03:05.314Z",
    "lastdate": "2025-03-18T08:21:28.299Z",
    "id": "22"
  },
  {
    "name": "Electronic Frozen Soap",
    "col": "7",
    "cost": "6042",
    "date": "2024-06-19T12:36:16.756Z",
    "lastdate": "2025-06-16T13:01:08.483Z",
    "id": "23"
  },
  {
    "name": "Oriental Soft Sausages",
    "col": "2",
    "cost": "3768",
    "date": "2024-06-19T17:08:42.995Z",
    "lastdate": "2024-12-19T09:53:32.372Z",
    "id": "24"
  },
  {
    "name": "Gorgeous Metal Chicken",
    "col": "9",
    "cost": "2297",
    "date": "2024-06-19T21:34:07.964Z",
    "lastdate": "2024-10-03T12:01:11.865Z",
    "id": "25"
  },
  {
    "name": "Handmade Plastic Keyboard",
    "col": "5",
    "cost": "5634",
    "date": "2024-06-19T05:29:19.076Z",
    "lastdate": "2024-12-14T11:47:44.277Z",
    "id": "26"
  },
  {
    "name": "Unbranded Cotton Hat",
    "col": "7",
    "cost": "8525",
    "date": "2024-06-19T11:51:53.532Z",
    "lastdate": "2024-12-15T04:57:13.586Z",
    "id": "27"
  },
  {
    "name": "Gorgeous Fresh Pants",
    "col": "3",
    "cost": "4826",
    "date": "2024-06-19T14:23:22.225Z",
    "lastdate": "2025-04-22T15:48:59.956Z",
    "id": "28"
  },
  {
    "name": "Gorgeous Bronze Pants",
    "col": "7",
    "cost": "7222",
    "date": "2024-06-19T19:06:34.166Z",
    "lastdate": "2024-09-06T02:28:10.988Z",
    "id": "29"
  },
  {
    "name": "Fantastic Cotton Mouse",
    "col": "4",
    "cost": "6448",
    "date": "2024-06-19T04:58:29.090Z",
    "lastdate": "2024-10-08T04:04:17.568Z",
    "id": "30"
  },
  {
    "name": "Small Steel Sausages",
    "col": "5",
    "cost": "3195",
    "date": "2024-06-19T15:10:32.505Z",
    "lastdate": "2025-04-28T13:22:54.289Z",
    "id": "31"
  },
  {
    "name": "Intelligent Bronze Gloves",
    "col": "3",
    "cost": "7902",
    "date": "2024-06-19T04:50:07.249Z",
    "lastdate": "2025-02-12T02:32:41.351Z",
    "id": "32"
  },
  {
    "name": "Bespoke Soft Chips",
    "col": "1",
    "cost": "3330",
    "date": "2024-06-19T07:02:23.814Z",
    "lastdate": "2024-11-04T07:41:53.911Z",
    "id": "33"
  },
  {
    "name": "Sleek Soft Mouse",
    "col": "2",
    "cost": "4507",
    "date": "2024-06-19T09:23:43.047Z",
    "lastdate": "2024-11-30T04:55:54.183Z",
    "id": "34"
  },
  {
    "name": "Handcrafted Frozen Ball",
    "col": "2",
    "cost": "5154",
    "date": "2024-06-19T12:09:56.720Z",
    "lastdate": "2024-07-29T11:18:50.631Z",
    "id": "35"
  },
  {
    "name": "Ergonomic Cotton Keyboard",
    "col": "6",
    "cost": "8168",
    "date": "2024-06-19T03:13:42.650Z",
    "lastdate": "2024-12-21T19:33:42.813Z",
    "id": "36"
  },
  {
    "name": "Recycled Frozen Chicken",
    "col": "6",
    "cost": "2966",
    "date": "2024-06-19T00:06:44.108Z",
    "lastdate": "2025-04-28T07:31:59.947Z",
    "id": "37"
  },
  {
    "name": "Ergonomic Steel Ball",
    "col": "6",
    "cost": "6166",
    "date": "2024-06-19T08:54:47.822Z",
    "lastdate": "2024-11-10T23:16:51.717Z",
    "id": "38"
  },
  {
    "name": "Elegant Bronze Gloves",
    "col": "2",
    "cost": "2341",
    "date": "2024-06-19T05:13:55.409Z",
    "lastdate": "2024-07-04T04:03:48.733Z",
    "id": "39"
  },
  {
    "name": "Handcrafted Plastic Chips",
    "col": "9",
    "cost": "9082",
    "date": "2024-06-19T11:45:33.655Z",
    "lastdate": "2024-09-27T15:06:23.543Z",
    "id": "40"
  },
  {
    "name": "Electronic Wooden Pants",
    "col": "8",
    "cost": "5545",
    "date": "2024-06-19T15:05:53.650Z",
    "lastdate": "2024-08-28T16:27:45.036Z",
    "id": "41"
  },
  {
    "name": "Sleek Concrete Towels",
    "col": "8",
    "cost": "0934",
    "date": "2024-06-19T02:21:40.888Z",
    "lastdate": "2024-10-31T22:08:08.375Z",
    "id": "42"
  },
  {
    "name": "Generic Plastic Chips",
    "col": "8",
    "cost": "3496",
    "date": "2024-06-19T10:42:32.125Z",
    "lastdate": "2024-10-24T21:10:27.021Z",
    "id": "43"
  },
  {
    "name": "Bespoke Soft Pants",
    "col": "8",
    "cost": "5265",
    "date": "2024-06-19T00:53:39.360Z",
    "lastdate": "2024-06-27T15:47:33.066Z",
    "id": "44"
  },
  {
    "name": "Luxurious Fresh Car",
    "col": "4",
    "cost": "6380",
    "date": "2024-06-19T04:04:27.569Z",
    "lastdate": "2024-11-03T13:20:46.431Z",
    "id": "45"
  },
  {
    "name": "Awesome Rubber Mouse",
    "col": "9",
    "cost": "3401",
    "date": "2024-06-19T20:04:51.544Z",
    "lastdate": "2024-07-26T12:56:39.656Z",
    "id": "46"
  },
  {
    "name": "Luxurious Bronze Chair",
    "col": "6",
    "cost": "9753",
    "date": "2024-06-19T13:52:02.391Z",
    "lastdate": "2025-01-12T02:35:13.040Z",
    "id": "47"
  },
  {
    "name": "Practical Metal Bike",
    "col": "4",
    "cost": "9731",
    "date": "2024-06-19T13:55:09.155Z",
    "lastdate": "2025-01-18T22:15:38.298Z",
    "id": "48"
  },
  {
    "name": "Refined Frozen Pizza",
    "col": "9",
    "cost": "8504",
    "date": "2024-06-19T11:12:36.623Z",
    "lastdate": "2024-08-27T13:36:46.323Z",
    "id": "49"
  },
  {
    "name": "Awesome Cotton Pants",
    "col": "1",
    "cost": "2480",
    "date": "2024-06-19T05:46:16.885Z",
    "lastdate": "2024-09-29T18:25:53.443Z",
    "id": "50"
  }
];
      }
      else{
      var response = await axios.get(adress);
      this.data = response.data;
      }
      if(this.choosen=='clients')
        this.names = this.clients;
      else if(this.choosen=='orders')
        this.names = this.orders;
      else
        this.names = this.goods;

      this.searched = {...this.data}; 
    },

    change(id){
      this.toChange = this.data[id];
      this.isChange = true;
    },
    hideCh(id, obj){
      var i = 0;
      var cpy = {};
      for(var v in this.data[id]){
        cpy[v] = obj[i].value;
        i++;
      }
      this.data[id] = {...cpy};
      this.isChange = false;
    },
    addData(){
      this.isAdd = true;
    },
    addR(id, obj){
      var i = 0;
      var cpy = {...this.data[0]};
      for(var v in cpy){
        cpy[v] = obj[i].value;
        i++;
      }
      this.data.push(cpy);
      console.log(cpy);
      this.isAdd = false;
    }
  }
  ,
  components:{
    CommonTable,
    ChangeRow,
    AddRow
  },
  async mounted(){
    await this.init();
  }
}
</script>

<style scoped>
  .active{
    background-color:#F2F4F6;
    border: 1px solid #A8AEBE;
  }

  .table-list{
    display: flex;
    height: 70px;
    width: 350px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #6D768E;
    border-top: 1px solid #6D768E;

    font-family: 'Montserrat' sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.38px;
    text-align: left;
  }

  .page{
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .page-wrapper{
    display: flex;
    flex-direction: column;
  }

  .add-btn{
    display: flex;
    align-self: self-end;
    border-radius: 10px;
    height: 50px;
    min-width: 200px;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 24.38px;
    background-color: #688FF2;
    color:white;
    align-items: center;
    justify-content: center;
    border:none
  }

  .inputs{
    display: flex;
    align-self: self-end;
    margin: 20px 15vw 20px 0;
    gap: 10px;
    flex-direction: column;
  }

  .search{
    width: 300px;
    min-height: 40px;
    border-radius: 15px;
    border: 1px solid #6D768E;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.38px;
    text-align: left;
  
    background: url(@/assets/lup.png) no-repeat scroll 7px 7px;
    padding-left:40px;
  }
</style>

import { createApp } from 'vue'
import { use } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            user:{
                id : 1,
                login : 'admin',
                mail : 'bestadmin@mail.com',
                password: 'adminadmin'
            },
            users:[
                {
                    id : 1,
                    login : 'admin',
                    mail : 'bestadmin@mail.com',
                    password: 'adminadmin'
                },
            ]
        } 
    },
    mutations:{
        setUser(state, user){
            state.user = user;
        },
        addUser(state, user){
            state.users.push(user);
        }
    }
})

createApp(App).use(router).use(store).mount('#app')
router.replace('/auth')

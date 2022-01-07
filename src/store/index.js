import { defineStore } from 'pinia'

export const useStore = defineStore('main',{
    state(){
        return {
            name:'张三',
            age:18,
            nation:'CHINA'
        }
    },
    getters:{

    },
    mutations:{

    },
    actions:{
        increment(){
            this.age++
        }
    }
})
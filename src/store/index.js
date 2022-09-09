import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            count: 0,
            flag: false,
        }
    },
    getters: {
        countAndFlag() {
            return {
                "count": store.state.count,
                "flag": store.state.flag
            }
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        assign(state,val){
            state.count = val;
        },
        change(state) {
            state.flag = !state.flag;
        }
    }
})
export default store;